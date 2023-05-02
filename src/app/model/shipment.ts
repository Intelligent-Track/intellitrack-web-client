import { Product } from "./product";

export class Shipment {
    constructor(
        public id: number, public origin: string, public destination: string,  public departureDate: Date, public arriveDate: Date,public costPerTon: number, public travelCost: number, public status: string, public type: string, public idDriver: number, public nit: string, public comments: string,  public products: Product[] 
    ) { }
}
