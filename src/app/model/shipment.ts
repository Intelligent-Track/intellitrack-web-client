import { Product } from "./product";

export class Shipment {
    constructor(
        public id: number, public origin: string, public destination: string,  public departureDate: Date, public arriveDate: Date, public type: string,public costPerTon: number, public travelCost: number, public status: string,  public products: Product[] 
    ) { }
}
