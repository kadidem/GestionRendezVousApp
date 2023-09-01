import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { MatDialog } from '@angular/material/dialog';
import { CreationrendezvousComponent } from '../creationrendezvous/creationrendezvous.component';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../dialog.service';
import { AddDoctorService } from '../services/add-doctor.service';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { Medecin } from '../models/medecin.js';
import { CreateAppoitment } from '../models/create-appoitment';
import { DetailsrendezvousComponent } from '../detailsrendezvous/detailsrendezvous.component';
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

       // Stockez le tableau des dates des rendez-vous

   datesWithAppointments: string[] = [];


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
  
    //tableau des rdv



    // Parcourez la liste de rendez-vous et ajoutez-les au calendrier un par un
    for (const rdv of this.rdvForms) {
      this.calendarEvents.push({
        title: rdv.motif,
        start: rdv.date + 'T' + rdv.time,
      });


      this.datesWithAppointments.push(rdv.date);

          // Ajoutez une classe CSS personnalisée pour les jours avec rendez-vous
    const date = rdv.date + 'T00:00:00'; // Utilisez la date du rendez-vous
    const dayCell = document.querySelector(`.fc-day[data-date="${date}"]`);
    if (dayCell) {
      dayCell.classList.add('has-appointment');
    }

    this.datesWithAppointments = this.datesWithAppointments;
    
    
    }
  }

  eventSettings: EventSettingsModel = {
    dataSource: []
  };

  dayRender(date: any, cell: HTMLElement) {
    const dateString = date.format('YYYY-MM-DD'); // Formattez la date
    if (this.datesWithAppointments.includes(dateString)) {
      cell.style.backgroundColor = '#38B198';
    }
  }

  ngOnInit(): void {
    this.medecinsSelect = this.medecinService.getMedecin(); 
   
    this.calendarOptions = {      
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: true,
      locale: frLocale,
      events: this.calendarEvents,
     
      //     events: [
      //   {color:'#38B198', title:"hi"},
      //   { title: 'Occupé', start: new Date() },
      // ],
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

  handleRendezVousClick(eventInfo: any) {
    // Récupérez les détails du rendez-vous à partir de eventInfo (vous devrez adapter ceci en fonction de la structure de vos données)
    const rendezVousDetails = {
      patient: eventInfo.event.extendedProps.patient,
      medecin: eventInfo.event.extendedProps.medecin,
      motif: eventInfo.event.title,
      // Ajoutez d'autres propriétés de rendez-vous au besoin
    };
    const dialogRef = this.dialog.open(DetailsrendezvousComponent, {
      width: '650px',
      height: '570px',
      data: rendezVousDetails, // Passez les détails du rendez-vous au composant rendezvousdetails
    });
  }

 


  

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
