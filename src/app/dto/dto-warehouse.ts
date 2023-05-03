import { City } from "../model/city";
import { Package } from "../model/package";
import { Type } from "../model/type";

export class DtoWarehouse {

    constructor(
        public city: City, public address: string, public capacity: number, public type: Type, public costPerM3: number, public inventory: Package[]
    ){}

}
