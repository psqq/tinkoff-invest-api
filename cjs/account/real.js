"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealAccount = void 0;
const operations_js_1 = require("../generated/operations.js");
class RealAccount {
    constructor(api, accountId, currency = operations_js_1.PortfolioRequest_CurrencyRequest.RUB) {
        this.api = api;
        this.accountId = accountId;
        this.currency = currency;
    }
    isSandbox() { return false; }
    async getInfo() {
        const { accounts } = await this.api.users.getAccounts({});
        return accounts.find(a => a.id === this.accountId);
    }
    async getPortfolio() {
        return this.api.operations.getPortfolio({ accountId: this.accountId, currency: this.currency });
    }
    async getOperations(request) {
        return this.api.operations.getOperations({ accountId: this.accountId, ...request });
    }
    async getPositions() {
        return this.api.operations.getPositions({ accountId: this.accountId });
    }
    async getOrders() {
        return this.api.orders.getOrders({ accountId: this.accountId });
    }
    async getOrderState(orderId) {
        return this.api.orders.getOrderState({ accountId: this.accountId, orderId });
    }
    async postOrder(request) {
        return this.api.orders.postOrder({ accountId: this.accountId, ...request });
    }
    async cancelOrder(orderId) {
        return this.api.orders.cancelOrder({ accountId: this.accountId, orderId });
    }
}
exports.RealAccount = RealAccount;
//# sourceMappingURL=real.js.map