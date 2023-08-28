import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { CreationrendezvousComponent } from '../creationrendezvous/creationrendezvous.component';
import { DetailsrendezvousComponent } from '../detailsrendezvous/detailsrendezvous.component';


@Component({
  selector: 'app-calendrierrendezvous',
  templateUrl: './calendrierrendezvous.component.html',
  styleUrls: ['./calendrierrendezvous.component.css']
})
export class CalendrierrendezvousComponent implements OnInit {

  constructor (private dialog: MatDialog){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      {color:'#38B198', title:"hi"},
      { title: 'Meeting', start: new Date() }
    ]
  };


  // afficher le calendar pop up 
  openDialog() {
    const dialogRef = this.dialog.open(CreationrendezvousComponent,{
      width: '650px',
      height:'570px',
    });
  
    // fermer le pop up dialog
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    // afficher les details pour le rendez vous 
    openDetails(){
      const dialogRef = this.dialog.open(DetailsrendezvousComponent,{
        width: '650px',
        height:'490px',
      });
    }


}
