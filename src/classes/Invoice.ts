import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;
  
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
  
    // only declate only constructor without declaring with modifiers
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
  
    format() {
      return `${this.client} owes ${this.amount} kr for ${this.details}`;
    }
}