/**
 * Tinkoff Invest API.
 */
import { createChannel, createClientFactory, Metadata, ChannelCredentials } from 'nice-grpc';
import { errorMiddleware, TinkoffApiError } from './api-error.js';
import { Helpers } from './helpers.js';
import { MarketStream } from './stream/market.js';
import { InstrumentsServiceDefinition } from './generated/instruments.js';
import { MarketDataServiceDefinition, MarketDataStreamServiceDefinition } from './generated/marketdata.js';
import { OperationsServiceDefinition } from './generated/operations.js';
import { OrdersServiceDefinition, OrdersStreamServiceDefinition } from './generated/orders.js';
import { SandboxServiceDefinition } from './generated/sandbox.js';
import { StopOrdersServiceDefinition } from './generated/stoporders.js';
import { UsersServiceDefinition } from './generated/users.js';
import { TradesStream } from './stream/trades.js';
export { TinkoffApiError };
const defaults = {
    endpoint: 'invest-public-api.tinkoff.ru:443',
    appName: '',
};
export class TinkoffInvestApi {
    constructor(options) {
        this.clients = new Map();
        this.helpers = Helpers;
        this.isBacktest = false;
        this.options = Object.assign({}, defaults, options);
        this.channel = this.createChannel();
        this.metadata = this.createDefaultMetadata();
    }
    get instruments() { return this.getOrCreateClient(InstrumentsServiceDefinition); }
    get marketdata() { return this.getOrCreateClient(MarketDataServiceDefinition); }
    get marketdataStream() { return this.getOrCreateClient(MarketDataStreamServiceDefinition); }
    get operations() { return this.getOrCreateClient(OperationsServiceDefinition); }
    get orders() { return this.getOrCreateClient(OrdersServiceDefinition); }
    get ordersStream() { return this.getOrCreateClient(OrdersStreamServiceDefinition); }
    get sandbox() { return this.getOrCreateClient(SandboxServiceDefinition); }
    get stoporders() { return this.getOrCreateClient(StopOrdersServiceDefinition); }
    get users() { return this.getOrCreateClient(UsersServiceDefinition); }
    get stream() { return this.getOrCreateStream(); }
    createChannel() {
        const { endpoint } = this.options;
        const credentials = /^localhost/i.test(endpoint)
            ? ChannelCredentials.createInsecure()
            : ChannelCredentials.createSsl();
        return createChannel(endpoint, credentials);
    }
    getOrCreateClient(service) {
        let client = this.clients.get(service);
        if (!client) {
            const defaultCallOptions = { '*': { metadata: this.metadata } };
            client = createClientFactory().use(errorMiddleware).create(service, this.channel, defaultCallOptions);
            this.clients.set(service, client);
        }
        return client;
    }
    getOrCreateStream() {
        if (!this.streamClients) {
            this.streamClients = {
                market: new MarketStream(this),
                trades: new TradesStream(this),
            };
        }
        return this.streamClients;
    }
    createDefaultMetadata() {
        return new Metadata({
            'Authorization': `Bearer ${this.options.token}`,
            'x-app-name': this.options.appName,
        });
    }
}
//# sourceMappingURL=api.js.map