import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginPatientService {

    private readonly Patients_KEY = 'patients';

    isUserLoggedIn = false;
  
    // constructor() { }
  
    // getPatients(): Patient[] {
    //   const patientsJSON = localStorage.getItem(this.Patients_KEY);
    //   return patientsJSON ? JSON.parse(patientsJSON) : [];
    // }
    
    // registerPatient(patient: Patient): void {
    //   const patients = this.getPatients();
    //   patients.push(patient);
    //   this.updatePatients(patients);
    // }
  
    // loginPatient(email: string, password: string): boolean {
    //   const patients = this.getPatients();
    //   const patient = patients.find(u => u.email === email && u.password === password);
    //   return !!patient;
    // }
  
    // private updatePatients(patients: Patient[]): void {
    //   localStorage.setItem(this.Patients_KEY, JSON.stringify(patients));
    // }


    constructor() { }

    // private loggedIn = new BehaviorSubject<boolean>(false); // {1}

   
    

    loginPatient(email: string, password: string): boolean {
      // Récupérer la liste des patients depuis le LocalStorage
      const patients: Patient[] = JSON.parse(localStorage.getItem('listePat') || '[]');
  
      // Vérifier si un patient correspond aux informations de connexion
       const loggedInPatient = patients.find(patient => patient.email === email && patient.password === password);
     
      

      if (loggedInPatient) {
     
        this.isUserLoggedIn = true;
        // Stocker les informations du patient connecté dans le LocalStorage, si nécessaire
        localStorage.setItem('loggedInPatient', JSON.stringify(loggedInPatient));
        return true;
      }
    
      
  
      return false;
    }

      public getUser = localStorage.getItem('loggedInPatient');


   setIsUserLoggedIn(value: boolean) {
    this.isUserLoggedIn = value;
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

    
  //   return true;
  // } else {
  //   this.isUserLoggedIn = false;
  //   return false;
  // }

 

  }
