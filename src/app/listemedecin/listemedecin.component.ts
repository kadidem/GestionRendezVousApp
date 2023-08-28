import { MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AjoutermedecinComponent } from '../ajoutermedecin/ajoutermedecin.component';
import { AjouterMedecinService } from '../services/ajouter-medecin.service';
import { AjouterMedecin } from '../models/ajouter-medecin';


@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css']

})
export class ListemedecinComponent implements OnInit {

  constructor( private medecinService: AjouterMedecinService,  private dialog: MatDialog) {}

  
  medecin: any[] = [];
  m: number = 1;


  ngOnInit(): void {
    this.medecin = this.medecinService.getMedecin();
    const storageLocal = localStorage.getItem('saveMedecin');
    if(storageLocal){
      this.medecin = JSON.parse(storageLocal);
    }
  }

  afficherMedecin(){
    return this.medecinService.getMedecin();

  }


  supprimerMedecin(medecin: AjouterMedecin){
     this.medecinService.supprimerMedecin(medecin);
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

