import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
@Injectable({
  providedIn: 'root'
})
export class LoginPatientService {

    private readonly Patients_KEY = 'patients';
  
    constructor() { }
  
    getPatients(): Patient[] {
      const patientsJSON = localStorage.getItem(this.Patients_KEY);
      return patientsJSON ? JSON.parse(patientsJSON) : [];
    }
    
    registerPatient(patient: Patient): void {
      const patients = this.getPatients();
      patients.push(patient);
      this.updatePatients(patients);
    }
  
    loginPatient(email: string, password: string): boolean {
      const patients = this.getPatients();
      const patient = patients.find(u => u.email === email && u.password === password);
      return !!patient;
    }
  
    private updatePatients(patients: Patient[]): void {
      localStorage.setItem(this.Patients_KEY, JSON.stringify(patients));
    }
}
