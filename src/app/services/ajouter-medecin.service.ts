import { Injectable } from '@angular/core';
import { AjouterMedecin } from '../models/ajouter-medecin.js';

@Injectable({
  providedIn: 'root'
})
export class AjouterMedecinService {

  constructor() { }

  private listeMedecin : AjouterMedecin [] = [];
  private idCount = 1;

  saveMedecin(){
    localStorage.setItem('listeMedecin', JSON.stringify(this.listeMedecin));
    }
  
  //ajout de medecin
  ajoutMedecin(medecin : AjouterMedecin) {
    medecin.id = this.idCount;
    this.listeMedecin.push(medecin);
    this.idCount++;
    this.saveMedecin();
  }
  //liste des medecin

  getMedecin() {
  let data : any = localStorage.getItem('listeMedecin');
  this.listeMedecin = JSON.parse(data)|| [];
  return this.listeMedecin;
  }
  
  supprimerMedecin(id : number) {
    const ID = this.listeMedecin.findIndex(index => index.id === id);
    
    if(ID !== -1 ){
      this.listeMedecin.splice(ID, 1);
      this.saveMedecin();
    }
  }
}
