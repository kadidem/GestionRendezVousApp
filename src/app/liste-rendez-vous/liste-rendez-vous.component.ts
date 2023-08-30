import { Component } from '@angular/core';
import { CreationrendezvousComponent } from '../creationrendezvous/creationrendezvous.component';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppoitment } from '../models/create-appoitment';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent {

  constructor(   private dialog: MatDialog, private addAppoitment : AddAppoitmentService) {}

  rdv: any[] = [];
  m: number = 1;
  p: number =1;


  ngOnInit(): void {
    this.rdv = this.addAppoitment.getAppoitment();
    const storageLocal = localStorage.getItem('listeRdv');
    if(storageLocal){
      this.rdv = JSON.parse(storageLocal);
    }
  }

  afficherRdv(){
    return this.addAppoitment.getAppoitment();

  }


  supprimerRdv(appoitment: CreateAppoitment){
     this.addAppoitment.supprimerAppoitment(appoitment.id);
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
            dialogRef.afterOpened().subscribe(() => {
              setTimeout(() => {
                dialogRef.close(); // Ferme automatiquement la boîte de dialogue après un certain délai
              }, 5000); // Délai de 3000 millisecondes (3 secondes)
            });
          }
          
        



}
