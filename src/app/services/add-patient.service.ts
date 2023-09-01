import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  constructor() { }

  private listePat : Patient [] = [];

  private idCount = 1;

  savePatient(){
    localStorage.setItem('listePat', JSON.stringify(this.listePat));
    
  }
  
  //ajout de medecin
  ajoutPatient(patient : Patient) {
    patient.id = this.idCount;
    this.listePat.push(patient);
    this.idCount++;
    this.savePatient();
  }
  

  
  getPatient() {
    let data : any = localStorage.getItem('listPat');
    this.listePat = JSON.parse(data)|| [];
    return this.listePat;
    }
    
    supprimerPatient(id : number) {
      const ID = this.listePat.findIndex(index => index.id === id);
      
      if(ID !== -1 ){
        this.listePat.splice(ID, 1);
        this.savePatient();
      }
    }
}
