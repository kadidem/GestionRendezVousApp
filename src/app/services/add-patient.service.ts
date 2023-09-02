import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {


  private listePat : Patient [] = [];

  private idCount = 1;

  savePatient(){
    localStorage.setItem('listePat', JSON.stringify(this.listePat));
    
  }
  
  constructor() {
    this.loadPatient();
  }

  // private savePatients() {
  //   localStorage.setItem('listePat', JSON.stringify(this.listePat));
  // }

  private loadPatient() {
    const data: any = localStorage.getItem('listePat');
    this.listePat = JSON.parse(data) || [];
    this.updateIdCount(); // Calculate the next idCount from the loaded data
  }

  private updateIdCount() {
    if (this.listePat.length > 0) {
      this.idCount = Math.max(...this.listePat.map(medecin => medecin.id)) + 1;
    }
  }

  ajoutPatient(patient: Patient) {
    patient.id = this.idCount;
    this.idCount++;
    this.listePat.push(patient);
    this.savePatient();
  }

  getPatient() {
    return this.listePat;
  }

  supprimerPatient(id: number) {
    const index = this.listePat.findIndex(patient => patient.id === id);
    if (index !== -1) {
      this.listePat.splice(index, 1);
      this.savePatient();
    }
  }
}
