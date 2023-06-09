import { City } from "../model/city";
import { DtoProduct } from "./dto-product";


export class DtoShipment {

    constructor(
        public originId: number, public destinationId: number, public type: string, public arriveDate: string, public departureDate: string, public comments: string, public products: DtoProduct[],
    ) { }
}
