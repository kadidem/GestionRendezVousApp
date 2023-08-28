import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AjoutermedecinComponent } from '../ajoutermedecin/ajoutermedecin.component';


@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css']

})
export class ListemedecinComponent {

  constructor(private dialog: MatDialog) {}

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

