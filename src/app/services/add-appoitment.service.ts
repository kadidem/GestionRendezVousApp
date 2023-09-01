import { Injectable } from '@angular/core';
import { CreateAppoitment } from '../models/create-appoitment.js';

@Injectable({
  providedIn: 'root'
})
export class AddAppoitmentService {

  constructor() { 
    this.loadAppoitment()
  }


  private listeRdv : CreateAppoitment [] = [];

  private idCount = 1;

  saveAppoitment(){
    localStorage.setItem('listeRdv', JSON.stringify(this.listeRdv));
    
  }

  private updateIdCount() {
    if (this.listeRdv.length > 0) {
      this.idCount = Math.max(...this.listeRdv.map(medecin => medecin.id)) + 1;
    }
  }

  private loadAppoitment() {
    const data: any = localStorage.getItem('listeRdv');
    this.listeRdv = JSON.parse(data) || [];
    this.updateIdCount(); 
  }

  
  
  //ajout de repas
  CreateAppoitment(CreateAppoitment : CreateAppoitment) {
    CreateAppoitment.id = this.idCount;
    this.idCount++;
    this.listeRdv.push(CreateAppoitment);
    this.saveAppoitment();
  }
  

  
  getAppoitment() {
    let data : any = localStorage.getItem('listeRdv');
    this.listeRdv = JSON.parse(data)|| [];
    return this.listeRdv;
    }
    
    deleteAppoitment(id : number) {
      const ID = this.listeRdv.findIndex(index => index.id === id);
      
      if(ID !== -1 ){
        this.listeRdv.splice(ID, 1);
        this.saveAppoitment();
      }
    }



}
