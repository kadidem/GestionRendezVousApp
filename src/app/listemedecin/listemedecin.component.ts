import { MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AjoutermedecinComponent } from '../ajoutermedecin/ajoutermedecin.component';
import { AddDoctorService } from '../services/add-doctor.service';
import { Medecin } from '../models/medecin.js';


@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css']

})
export class ListemedecinComponent implements OnInit {


  constructor(   private dialog: MatDialog, private medecinService : AddDoctorService) {}

  medecin: any[] = [];
  m: number = 1;
  p: number =1;


  ngOnInit(): void {
    this.medecin = this.medecinService.getMedecin();
    const storageLocal = localStorage.getItem('listeDoc');
    if(storageLocal){
      this.medecin = JSON.parse(storageLocal);
    }
  }

  afficherMedecin(){
    return this.medecinService.getMedecin();

  }


  supprimerMedecin(medecin: Medecin){
     this.medecinService.supprimerMedecin(medecin.id);
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
          const dialogRef = this.dialog.open(AjoutermedecinComponent,{
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

