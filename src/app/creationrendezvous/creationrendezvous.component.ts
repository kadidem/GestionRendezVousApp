import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-creationrendezvous',
  templateUrl: './creationrendezvous.component.html',
  styleUrls: ['./creationrendezvous.component.css']
})
export class CreationrendezvousComponent {

  constructor(private dialog: MatDialog) {}
  


  openDialog() {
    const dialogRef = this.dialog.open(CreationrendezvousComponent,{
      width: '650px',
      height:'570px',
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}
