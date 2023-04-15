
import { City } from "./city";
import { Type } from "./type";

export class Warehouse {

    constructor(
        public id: number, public city: City, public address: string, public capacity: number, public type: Type, public costPerM3: number
    ){}

}
