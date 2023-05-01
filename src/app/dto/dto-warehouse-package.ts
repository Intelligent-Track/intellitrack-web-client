import { City } from "../model/city";
import { Package } from "../model/package";
import { Type } from "../model/type";

export class DtoWarehousePackage {

    constructor(
        public warehouseId: number, public packages: Package[]
    ){}

}
