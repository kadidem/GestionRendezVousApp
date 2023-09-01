import { MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AjoutermedecinComponent } from '../ajoutermedecin/ajoutermedecin.component';
import { AddDoctorService } from '../services/add-doctor.service';
import { Medecin } from '../models/medecin.js';
import Swal from 'sweetalert2';


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


  supprimerMedecin(medecins: Medecin){

     Swal.fire({
      title: 'Etes vous sûr ?',
      text: "Ces données ne pourront plus être recuperer!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Annuler',
      confirmButtonColor: '#38B198',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux supprimer!',
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimer!',
          'Suppression avec succès.',
          'success'
        )
        this.medecinService.supprimerMedecin(medecins.id);
        this.afficherMedecin();
      }
      else{
        Swal.fire(
          'Suppression annulée!',
          'Cette suppresion a été annulée.',
          'error'
        )
      }
    })
    this.afficherMedecin();

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
          
    
  // onFormSubmitted() {
  //   this.isFormVisible = false;
  // }
        
}

