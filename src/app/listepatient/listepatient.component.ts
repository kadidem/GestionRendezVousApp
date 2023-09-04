import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Patient } from '../models/patient';
import { AddPatientService } from '../services/add-patient.service';
import { AjouterpatientComponent } from '../ajouterpatient/ajouterpatient.component';

@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.css']
})
export class ListepatientComponent implements OnInit {

  constructor(   private dialog: MatDialog, private patientService : AddPatientService) {}

  patient: Patient[] = [];
  m: number = 1;
  p: number =1;
  isFormVisible = false;
  isEditMode = false;
  
  
  ngOnInit(): void {
    this.patient = this.patientService.getPatients();
    const storageLocal = localStorage.getItem('listePat');
    if(storageLocal){
      this.patient = JSON.parse(storageLocal);
    }
    console.log("LES PATIENT"+this.patient)
  }

  afficherPatient(){
    return this.patientService.getPatients();

  }


  supprimerPatient(patients: Patient){
     this.patientService.supprimerPatient(patients.id);
  }
        toggleFormWithDelay() {
          setTimeout(() => {
            this.isFormVisible = !this.isFormVisible;
          }, 1000); // Delay of 1 second
        }
        toggleForm(isEditMode: boolean) {
          this.isFormVisible = true;
          this.isEditMode = isEditMode;
        }
        
        openDialog() {
          const dialogRef = this.dialog.open(AjouterpatientComponent,{
            width: '650px',
            height:'570px',
          });

            dialogRef.afterClosed().subscribe(result => {
              console.log('Cette dialogue a été déjà fermer');
            });
          }
             
  onFormSubmitted() {
    this.isFormVisible = false;
  }
        
}

