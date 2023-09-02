import { Medecin } from "./medecin";
import { Patient } from "./patient.js";

export class CreateAppoitment {

    constructor(  
        public id : number,
        public date : string,
        public time : string,
        public doc : Medecin[],
        public motif: string,
        private patient: Patient,
       
        // patient 
    ){}

}
