import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css'],
    animations: [
      trigger('slideDown', [
        state('in', style({ opacity: 1, transform: 'translateY(0)' })),
        transition('void => *', [
          style({ opacity: 0, transform: 'translateY(-100%)' }),
          animate('300ms ease-in-out')
        ]),
        transition('* => void', [
          animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
        ])
      ])
    ]

})
export class ListemedecinComponent {

  // constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

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
        


        
        
        
  onFormSubmitted() {
    this.isFormVisible = false;
  }
        
}

