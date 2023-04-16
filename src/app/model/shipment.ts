import { Product } from "./product";

export class Shipment {
    constructor(
        public id: number, public origin: string, public destiny: string, public type: string, public date: Date,  public products: Product[],
    ) { }
}
