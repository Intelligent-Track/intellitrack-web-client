import { DtoProduct } from "./dto-product";


export class DtoShipment {

    constructor(
        public origin: string, public destiny: string, public type: string, public date: Date,  public products: DtoProduct[],
    ) { }
}
