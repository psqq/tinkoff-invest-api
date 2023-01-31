/**
 * Реальный счет
 */
import { TinkoffInvestApi } from '../api.js';
import { OperationsRequest, PortfolioRequest_CurrencyRequest } from '../generated/operations.js';
import { PostOrderRequest } from '../generated/orders.js';
import { OmitAccount } from './types.js';
export declare class RealAccount {
    api: TinkoffInvestApi;
    accountId: string;
    currency: PortfolioRequest_CurrencyRequest;
    constructor(api: TinkoffInvestApi, accountId: string, currency?: PortfolioRequest_CurrencyRequest);
    isSandbox(): boolean;
    getInfo(): Promise<import("../generated/users.js").Account | undefined>;
    getPortfolio(): Promise<import("../generated/operations.js").PortfolioResponse>;
    getOperations(request: OmitAccount<OperationsRequest>): Promise<import("../generated/operations.js").OperationsResponse>;
    getPositions(): Promise<import("../generated/operations.js").PositionsResponse>;
    getOrders(): Promise<import("../generated/orders.js").GetOrdersResponse>;
    getOrderState(orderId: string): Promise<import("../generated/orders.js").OrderState>;
    postOrder(request: OmitAccount<PostOrderRequest>): Promise<import("../generated/orders.js").PostOrderResponse>;
    cancelOrder(orderId: string): Promise<import("../generated/orders.js").CancelOrderResponse>;
}
//# sourceMappingURL=real.d.ts.map