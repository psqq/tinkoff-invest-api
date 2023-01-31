import { PortfolioRequest_CurrencyRequest } from '../generated/operations.js';
export class SandboxAccount {
    constructor(api, accountId, currency = PortfolioRequest_CurrencyRequest.RUB) {
        this.api = api;
        this.accountId = accountId;
        this.currency = currency;
    }
    isSandbox() { return true; }
    async getInfo() {
        const { accounts } = await this.api.sandbox.getSandboxAccounts({});
        return accounts.find(a => a.id === this.accountId);
    }
    async getPortfolio() {
        return this.api.sandbox.getSandboxPortfolio({ accountId: this.accountId, currency: this.currency });
    }
    async getOperations(request) {
        return this.api.sandbox.getSandboxOperations({ accountId: this.accountId, ...request });
    }
    async getPositions() {
        return this.api.sandbox.getSandboxPositions({ accountId: this.accountId });
    }
    async getOrders() {
        return this.api.sandbox.getSandboxOrders({ accountId: this.accountId });
    }
    async getOrderState(orderId) {
        return this.api.sandbox.getSandboxOrderState({ accountId: this.accountId, orderId });
    }
    async postOrder(request) {
        return this.api.sandbox.postSandboxOrder({ accountId: this.accountId, ...request });
    }
    async cancelOrder(orderId) {
        return this.api.sandbox.cancelSandboxOrder({ accountId: this.accountId, orderId });
    }
    // own methods
    async open() {
        const res = await this.api.sandbox.openSandboxAccount({});
        this.accountId = res.accountId;
    }
    async close() {
        return this.api.sandbox.closeSandboxAccount({ accountId: this.accountId });
    }
    async payIn(amount) {
        return this.api.sandbox.sandboxPayIn({ accountId: this.accountId, amount });
    }
}
//# sourceMappingURL=sandbox.js.map