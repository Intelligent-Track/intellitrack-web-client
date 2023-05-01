import { Package } from "../model/package";

export class DtoWarehousePackage {

    constructor(
        public warehouseId: number, public packages: Package[]
    ){}

}
