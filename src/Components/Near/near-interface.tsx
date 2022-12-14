export class HelloNEAR {
    public contractId: any;
    public wallet: any;

    constructor({ contractId, walletToUse }: { contractId: any, walletToUse: any }) {
        this.contractId = contractId;
        this.wallet = walletToUse;
    }

    async getGreeting() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_greeting' });
    }

    async setGreeting(greeting: any) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'set_greeting', args: { message: greeting } });
    }
}