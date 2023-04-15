import { City } from "../model/city";
import { DtoProduct } from "./dto-product";


export class DtoShipment {

    constructor(
        public origin: number, public destiny: number, public type: string, public date: string,  public products: DtoProduct[],
    ) { }
}
