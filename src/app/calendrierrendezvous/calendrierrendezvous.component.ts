import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { MatDialog } from '@angular/material/dialog';
import { CreationrendezvousComponent } from '../creationrendezvous/creationrendezvous.component';
import { DetailsrendezvousComponent } from '../detailsrendezvous/detailsrendezvous.component';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../dialog.service';
import { AddDoctorService } from '../services/add-doctor.service';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { Medecin } from '../models/medecin.js';
import { CreateAppoitment } from '../models/create-appoitment';
// import { View , EventSettingModel } from '@syncfusion/ej2-angular-calendars';
// import { ViewApi } from '@fullcalendar/core';


@Component({
  selector: 'app-calendrierrendezvous',
  templateUrl: './calendrierrendezvous.component.html',
  styleUrls: ['./calendrierrendezvous.component.css']
})
export class CalendrierrendezvousComponent implements OnInit {

  medecinsSelect !: Medecin [] | any[];

  rdvForm !: FormGroup;
  eventForm!: FormGroup;

  numRecords: number = 0;

  calendarOptions: CalendarOptions = {};
  calendarEvents: any[] = [];
  rdvForms: CreateAppoitment[] = []; // Votre liste de rendez-vous

  constructor(
    private formBuilder: FormBuilder,
    private dialogService : DialogService,
    private dialog: MatDialog,
    private medecinService: AddDoctorService,
    private rdvService: AddAppoitmentService
  ) {
    this.rdvForm = this.formBuilder.group({
      id: ['null'],
      date: ['', Validators.required],
      time: ['', Validators.required],
      doc: ['', Validators.required],
      motif: ['', Validators.required]
    });
  }


  ajouterRendezVousAuCalendrier() {
    // Parcourez la liste de rendez-vous et ajoutez-les au calendrier un par un
    for (const rdv of this.rdvForms) {
      this.calendarEvents.push({
        title: rdv.motif,
        start: rdv.date + 'T' + rdv.time
      });
    }
  }



  eventSettings: EventSettingsModel = {
    dataSource: []
  };

  ngOnInit(): void {
    this.medecinsSelect = this.medecinService.getMedecin(); 
   
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: true,
      locale: frLocale,
          events: [
        {color:'#38B198', title:"hi"},
        { title: 'Occupé', start: new Date() }
      ],
    };

    // Chargez votre liste de rendez-vous
    this.rdvForms = this.rdvService.getAppoitment();

    // Ajoutez les rendez-vous au calendrier
    this.ajouterRendezVousAuCalendrier();

  }




  // calendarOption: any = {
  //   plugins: [dayGridPlugin],
  //   initialView: 'dayGridMonth',
  //   weekends: true,
  //   locale: frLocale,
  //       events: [
  //     {color:'#38B198', title:"hi"},
  //     { title: 'Occupé', start: new Date() }
  //   ],
   
  // };

 


  

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
