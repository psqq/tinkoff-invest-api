/**
 * Счет в песочнице
 */
import { TinkoffInvestApi } from '../api.js';
import { OperationsRequest, PortfolioRequest_CurrencyRequest } from '../generated/operations.js';
import { PostOrderRequest } from '../generated/orders.js';
import { SandboxPayInRequest } from '../generated/sandbox.js';
import { OmitAccount, CommonAccountMethods } from './types.js';
export declare class SandboxAccount implements CommonAccountMethods {
    api: TinkoffInvestApi;
    accountId: string;
    currency: PortfolioRequest_CurrencyRequest;
    constructor(api: TinkoffInvestApi, accountId: string, currency?: PortfolioRequest_CurrencyRequest);
    isSandbox(): this is SandboxAccount;
    getInfo(): Promise<import("../generated/users.js").Account | undefined>;
    getPortfolio(): Promise<import("../generated/operations.js").PortfolioResponse>;
    getOperations(request: OmitAccount<OperationsRequest>): Promise<import("../generated/operations.js").OperationsResponse>;
    getPositions(): Promise<import("../generated/operations.js").PositionsResponse>;
    getOrders(): Promise<import("../generated/orders.js").GetOrdersResponse>;
    getOrderState(orderId: string): Promise<import("../generated/orders.js").OrderState>;
    postOrder(request: OmitAccount<PostOrderRequest>): Promise<import("../generated/orders.js").PostOrderResponse>;
    cancelOrder(orderId: string): Promise<import("../generated/orders.js").CancelOrderResponse>;
    open(): Promise<void>;
    close(): Promise<import("../generated/sandbox.js").CloseSandboxAccountResponse>;
    payIn(amount: SandboxPayInRequest['amount']): Promise<import("../generated/sandbox.js").SandboxPayInResponse>;
}
//# sourceMappingURL=sandbox.d.ts.map