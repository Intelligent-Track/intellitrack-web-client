import { City } from "../model/city";

export class DtoQuote {
    constructor(
        public loadtype: string, public origin: City, public destiny: City, public weight: number,public date: string
        
    ) { }
}
