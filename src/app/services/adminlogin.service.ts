import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.js';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

 
  constructor() { }

  loginAdmin(email: string, password: string): boolean {
    // Récupérer la liste des patients depuis le LocalStorage
    const patients: Admin[] = JSON.parse(localStorage.getItem('listeAdmin') || '[]');

    // Vérifier si un patient correspond aux informations de connexion
    const loggedInAdmin = patients.find(admin => admin.email === email && admin.password === password);
  
    if (loggedInAdmin) {
      // Stocker les informations du patient connecté dans le LocalStorage, si nécessaire
      localStorage.setItem('loggedInAdmin', JSON.stringify(loggedInAdmin));
      const loggedInAdmins: Admin = JSON.parse(localStorage.getItem('loggedInAdmin') || '{}');

      return true;
    }

    return false;
  }

}
