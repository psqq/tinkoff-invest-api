/**
 * Класс для подписок на realtime marketdata.
 * See: https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
import { BaseStream } from './base.js';
import { MarketSubscription } from './market-subscription.js';
import { Candle, LastPrice, MarketDataRequest, MarketDataResponse, OrderBook, SubscribeCandlesRequest, SubscribeInfoRequest, SubscribeLastPriceRequest, SubscribeOrderBookRequest, SubscribeTradesRequest, Trade, TradingStatus } from '../generated/marketdata.js';
import { TinkoffInvestApi } from '../api.js';
declare type SubscribeRequest = Required<MarketDataRequest>[keyof MarketDataRequest];
declare type WithoutAction<T extends SubscribeRequest> = Omit<T, 'subscriptionAction'>;
export declare class MarketStream extends BaseStream<MarketDataRequest, MarketDataResponse> {
    api: TinkoffInvestApi;
    options: {
        autoReconnect: boolean;
        autoReconnectDelayMin: number;
        autoReconnectDelayMax: number;
    };
    subscriptions: Set<MarketSubscription<any, any>>;
    protected autoReconnectDelay: number;
    constructor(api: TinkoffInvestApi);
    /**
     * Подписка на свечи.
     */
    candles(req: WithoutAction<SubscribeCandlesRequest>, dataHandler: (candle: Candle) => unknown): Promise<() => Promise<void>>;
    /**
     * Подписка на сделки.
     */
    trades(req: WithoutAction<SubscribeTradesRequest>, dataHandler: (trade: Trade) => unknown): Promise<() => Promise<void>>;
    /**
     * Подписка на стакан.
     */
    orderBook(req: WithoutAction<SubscribeOrderBookRequest>, dataHandler: (orderbook: OrderBook) => unknown): Promise<() => Promise<void>>;
    /**
     * Подписка на цены.
     */
    lastPrice(req: WithoutAction<SubscribeLastPriceRequest>, dataHandler: (lastPrice: LastPrice) => unknown): Promise<() => Promise<void>>;
    /**
     * Подписка на информацию об инструменте.
     */
    info(req: WithoutAction<SubscribeInfoRequest>, dataHandler: (tradingStatus: TradingStatus) => unknown): Promise<() => Promise<void>>;
    /**
     * Получение текущих подписок.
     */
    getMySubscriptions(): Promise<MarketDataResponse>;
    reconnect(): Promise<void>;
    protected ensureConnected(): void;
    protected onClose(error?: Error): void;
    protected watch(subscription: MarketSubscription<any, any>): Promise<() => Promise<void>>;
    protected unwatch(subscription: MarketSubscription<any, any>): Promise<void>;
    protected calcAutoReconnectDelay(): void;
}
export {};
//# sourceMappingURL=market.d.ts.map