import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient, H } from 'module';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin.js';


@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {



  constructor() { }

  private listeDoc : Medecin [] = [];

  private idCount = 1;

  saveMedecin(){
    localStorage.setItem('listeDoc', JSON.stringify(this.listeDoc));
    
  }
  
  //ajout de repas
  ajoutMedecin(medecin : Medecin) {
    medecin.id = this.idCount;
    this.listeDoc.push(medecin);
    this.idCount++;
    this.saveMedecin();
  }
  

  
  getMedecin() {
    let data : any = localStorage.getItem('listeDoc');
    this.listeDoc = JSON.parse(data)|| [];
    return this.listeDoc;
    }
    
    supprimerMedecin(id : number) {
      const ID = this.listeDoc.findIndex(index => index.id === id);
      
      if(ID !== -1 ){
        this.listeDoc.splice(ID, 1);
        this.saveMedecin();
      }
    }




  
}
