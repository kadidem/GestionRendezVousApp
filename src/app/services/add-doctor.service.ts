import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient, H } from 'module';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin.js';


@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {



  private listeDoc: Medecin[] = [];
  private idCount: number = 1; // Initialize with 1 or a suitable starting value

  constructor() {
    this.loadMedecins();
  }

  private saveMedecins() {
    localStorage.setItem('listeDoc', JSON.stringify(this.listeDoc));
  }

  private loadMedecins() {
    const data: any = localStorage.getItem('listeDoc');
    this.listeDoc = JSON.parse(data) || [];
    this.updateIdCount(); // Calculate the next idCount from the loaded data
  }

  private updateIdCount() {
    if (this.listeDoc.length > 0) {
      this.idCount = Math.max(...this.listeDoc.map(medecin => medecin.id)) + 1;
    }
  }

  ajoutMedecin(medecin: Medecin) {
    medecin.id = this.idCount;
    this.idCount++;
    this.listeDoc.push(medecin);
    this.saveMedecins();
  }

  getMedecin() {
    return this.listeDoc;
  }

  supprimerMedecin(id: number) {
    const index = this.listeDoc.findIndex(medecin => medecin.id === id);
    if (index !== -1) {
      this.listeDoc.splice(index, 1);
      this.saveMedecins();
    }
  }
}
