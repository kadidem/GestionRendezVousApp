import { Medecin } from "./medecin.js";

export class CreateAppoitment {

    constructor(  
        public id : number,
        public date : string,
        public time : string,
        public doc : Medecin[],
        public motif: string,
    ){}

}
