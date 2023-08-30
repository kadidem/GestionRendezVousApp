import { Injectable } from '@angular/core';
import { CreateAppoitment } from '../models/create-appoitment.js';

@Injectable({
  providedIn: 'root'
})
export class AddAppoitmentService {

  constructor() { }


  private listeRdv : CreateAppoitment [] = [];

  private idCount = 1;

  saveAppoitment(){
    localStorage.setItem('listeRdv', JSON.stringify(this.listeRdv));
    
  }
  
  //ajout de repas
  CreateAppoitment(CreateAppoitment : CreateAppoitment) {
    CreateAppoitment.id = this.idCount;
    this.listeRdv.push(CreateAppoitment);
    this.idCount++;
    this.saveAppoitment();
  }
  

  
  getAppoitment() {
    let data : any = localStorage.getItem('listeRdv');
    this.listeRdv = JSON.parse(data)|| [];
    return this.listeRdv;
    }
    
    supprimerAppoitment(id : number) {
      const ID = this.listeRdv.findIndex(index => index.id === id);
      
      if(ID !== -1 ){
        this.listeRdv.splice(ID, 1);
        this.saveAppoitment();
      }
    }



}
