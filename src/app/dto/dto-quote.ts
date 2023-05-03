import { City } from "../model/city";

export class DtoQuote {
    constructor(
        public loadType: string, public originCity: City, public destinationCity: City, public weight: number,  
        public volume: number,public dateArrive: string, public dateDeparture: string
    ) { }
}
