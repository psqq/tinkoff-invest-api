/**
 * Класс подписки в стриме market.
 * Позволяет ожидать результата подписки и вызывать обработчики для figi, заданных при подписке.
 * See: https://github.com/vitalets/tinkoff-invest-api/issues/6
 */
import { Candle, CandleSubscription, InfoSubscription, LastPrice, LastPriceSubscription, MarketDataRequest, MarketDataResponse, OrderBook, OrderBookSubscription, SubscriptionAction, Trade, TradeSubscription, TradingStatus } from '../generated/marketdata.js';
declare type ResponseSubscription = CandleSubscription | TradeSubscription | OrderBookSubscription | LastPriceSubscription | InfoSubscription;
declare type ResponseData = Candle | Trade | OrderBook | LastPrice | TradingStatus;
declare type MarketSubscriptionOptions<S, D> = {
    buildRequest: (subscriptionAction: SubscriptionAction) => MarketDataRequest;
    buildResponse: (res: MarketDataResponse) => UniversalMarketResponse<S, D>;
    dataHandler: (data: D) => unknown;
    requestKeys: string[];
};
/**
 * Универсальный ответ (одинаковые поля для разных типов подписок)
 */
export declare type UniversalMarketResponse<S, D> = {
    trackingId?: string;
    subscriptions?: S[];
    subscriptionKeys?: string[];
    data?: D;
    dataKey?: string;
};
export declare class MarketSubscription<S extends ResponseSubscription, D extends ResponseData> {
    protected options: MarketSubscriptionOptions<S, D>;
    protected waitingStatusResolve?: () => unknown;
    protected waitingStatusReject?: (error: Error) => unknown;
    constructor(options: MarketSubscriptionOptions<S, D>);
    getRequest(subscriptionAction: SubscriptionAction): MarketDataRequest;
    handler(res: MarketDataResponse): void;
    waitStatus(): Promise<void>;
    protected statusHandler({ subscriptions, subscriptionKeys, trackingId }: UniversalMarketResponse<S, D>): void;
    protected dataHandler({ data, dataKey }: UniversalMarketResponse<S, D>): void;
    protected buildSubscriptionError(errorSubscriptions: S[], trackingId?: string): Error;
}
export {};
//# sourceMappingURL=market-subscription.d.ts.map