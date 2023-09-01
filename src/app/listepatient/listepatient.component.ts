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

  patient: any[] = [];
  m: number = 1;
  p: number =1;


  ngOnInit(): void {
    this.patient = this.patientService.getPatient();
    const storageLocal = localStorage.getItem('listePat');
    if(storageLocal){
      this.patient = JSON.parse(storageLocal);
    }
  }

  afficherPatient(){
    return this.patientService.getPatient();

  }


  supprimerPatient(patients: Patient){
     this.patientService.supprimerPatient(patients.id);
  }
      isFormVisible = false;
      isEditMode=false;

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

