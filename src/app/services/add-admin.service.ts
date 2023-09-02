import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.js';

@Injectable({
  providedIn: 'root'
})
export class AddAdminService {


  
  private listeAdmin : Admin [] = [];

  private idCount = 1;

  saveAdmin(){
    localStorage.setItem('listeAdmin', JSON.stringify(this.listeAdmin));
    
  }
  
  constructor() {
    this.loadAdmin();
  }

  // private savePatients() {
  //   localStorage.setItem('listePat', JSON.stringify(this.listePat));
  // }

  private loadAdmin() {
    const data: any = localStorage.getItem('listeAdmin');
    this.listeAdmin = JSON.parse(data) || [];
    this.updateIdCount(); // Calculate the next idCount from the loaded data
  }

  private updateIdCount() {
    if (this.listeAdmin.length > 0) {
      this.idCount = Math.max(...this.listeAdmin.map(admin => admin.id)) + 1;
    }
  }

  ajoutAdmin(admin: Admin) {
    admin.id = this.idCount;
    this.idCount++;
    this.listeAdmin.push(admin);
    this.saveAdmin();
  }

  getAdmin() {
    return this.listeAdmin;
  }

  supprimerAdmin(id: number) {
    const index = this.listeAdmin.findIndex(admin => admin.id === id);
    if (index !== -1) {
      this.listeAdmin.splice(index, 1);
      this.saveAdmin();
    }
  }
 
}
