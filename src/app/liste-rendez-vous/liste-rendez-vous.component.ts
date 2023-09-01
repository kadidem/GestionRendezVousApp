import { Component } from '@angular/core';
import { CreationrendezvousComponent } from '../creationrendezvous/creationrendezvous.component';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppoitment } from '../models/create-appoitment';
import { AddDoctorService } from '../services/add-doctor.service';
import { Medecin } from '../models/medecin.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent {

  constructor(   private dialog: MatDialog, private addAppoitment : AddAppoitmentService, private medecinService : AddDoctorService) {}

  rdvForm: any[] = [];
  m: number = 1;
  p: number =1;
  medcecinListe !: Medecin[];


  ngOnInit(): void {
    this.rdvForm = this.addAppoitment.getAppoitment();
    this.medcecinListe = this.medecinService.getMedecin();
    const storageLocal = localStorage.getItem('listeRdv');
    if(storageLocal){
      this.rdvForm = JSON.parse(storageLocal);
    }
  }

  afficherRdv(){
    return this.addAppoitment.getAppoitment();

  }


  supprimerRdv(appoitment: CreateAppoitment){
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
        this.addAppoitment.deleteAppoitment(appoitment.id);
        this.afficherRdv();
      }
      else{
        Swal.fire(
          'Suppression annulée!',
          'Cette suppresion a été annulée.',
          'error'
        )
      }
    })
    this.afficherRdv();

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
          const dialogRef = this.dialog.open(CreationrendezvousComponent,{
            width: '650px',
            height:'570px',
          });

            dialogRef.afterClosed().subscribe(result => {
              console.log('Cette dialogue a été déjà fermer');
            });
            // dialogRef.afterOpened().subscribe(() => {
            //   setTimeout(() => {
            //     dialogRef.close(); // Ferme automatiquement la boîte de dialogue après un certain délai
            //   }, 5000); // Délai de 3000 millisecondes (3 secondes)
            // });
          }
          
        



}
