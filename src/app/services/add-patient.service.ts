import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {
//   constructor() {}

//   // Méthode pour inscrire un patient
//   registerPatient(newPatient: Patient): void {
//     // Récupérer la liste actuelle des patients depuis le stockage local
//     let patients: Patient[] = JSON.parse(localStorage.getItem('listePat')) || [];

//     // Ajouter le nouveau patient à la liste
//     patients.push(newPatient);

//     // Mettre à jour la liste des patients dans le stockage local
//     localStorage.setItem('listePat', JSON.stringify(patients));
//   }
// }


  private listePat: Patient[] = [];
  private idCount = 1;

  constructor() {
    // Au chargement du service, récupérez les patients depuis le stockage local (localStorage)
    this.loadPatients();
  }

  // Sauvegarder la liste de patients dans le stockage local
  savePatient() {
    localStorage.setItem('listePat', JSON.stringify(this.listePat));
  }

  // Ajouter un patient à la liste
  ajoutPatient(patient: Patient) {
    patient.id = this.idCount;
    this.listePat.push(patient);
    this.idCount++;
    this.savePatient();
  }

  // Récupérer la liste de patients
  getPatients(): Patient[] {
    return this.listePat;
  }

  // Supprimer un patient par ID
  supprimerPatient(id: number) {
    const ID = this.listePat.findIndex(patient => patient.id === id);

    if (ID !== -1) {
      this.listePat.splice(ID, 1);
      this.savePatient();
    }
  }

  // Charger la liste de patients depuis le stockage local
  private loadPatients() {
    const data: any = localStorage.getItem('listePat');
    this.listePat = JSON.parse(data) || [];
    
    // Si la liste existe, mettez à jour l'idCount pour éviter les doublons d'ID
    if (this.listePat.length > 0) {
      this.idCount = Math.max(...this.listePat.map(patient => patient.id)) + 1;
    }
  }
}