import { Warehouse } from "./warehouse";

export class Package {

    constructor(
        public id: number, public location: string, public type: string, public volume: number, public weight: number, public idClient: number
    ) { }

}