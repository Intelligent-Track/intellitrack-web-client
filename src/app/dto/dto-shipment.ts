import { ProductItem } from "../model/product-item";

export class DtoShipment {

    constructor(
        public origin: string, public destiny: string, public type: string, public date: Date,  public products: ProductItem[],
    ) { }
}
