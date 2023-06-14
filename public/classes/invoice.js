export class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    // only declate only constructor without declaring with modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} kr for ${this.details}`;
    }
}
