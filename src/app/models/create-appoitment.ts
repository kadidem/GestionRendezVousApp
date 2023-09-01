import { Medecin } from "./medecin";

export class CreateAppoitment {

    constructor(  
        public id : number,
        public date : string,
        public time : string,
        public doc : Medecin[],
        public motif: string,
        // patient 
    ){}

}
