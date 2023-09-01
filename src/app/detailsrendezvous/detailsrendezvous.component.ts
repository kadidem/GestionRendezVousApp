import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detailsrendezvous',
  templateUrl: './detailsrendezvous.component.html',
  styleUrls: ['./detailsrendezvous.component.css']
})
export class DetailsrendezvousComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


}
