import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Medecin } from '../models/medecin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { AddDoctorService } from '../services/add-doctor.service';
import { CreateAppoitment } from '../models/create-appoitment';
import Swal from 'sweetalert2';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { DialogService } from '../services/dialog.service';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';




@Component({
  selector: 'app-creationrendezvous',
  templateUrl: './creationrendezvous.component.html',
  styleUrls: ['./creationrendezvous.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]

})
export class CreationrendezvousComponent implements OnInit {

  medecinsSelect !: Medecin [] | any[];

  rdvForm !: FormGroup;
  eventForm!: FormGroup;

  numRecords: number = 0;

  // constructor(private formBuilder: FormBuilder , private dialogService : DialogService , private dialog: MatDialog , private medecinService: AddDoctorService ,private rdvService: AddAppoitmentService) {

  //   this.rdvForm = this.formBuilder.group({
  //     id:['null'],
  //     date: ['', Validators.required],
  //     time: ['', Validators.required],
  //     doc: ['', Validators.required],
  //     motif: ['', Validators.required],
  //   });

  // }

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
  calendarOptions: any = {
    events: []
  };



  eventSettings: EventSettingsModel = {
    dataSource: []
  };

  ngOnInit(): void {
    this.medecinsSelect = this.medecinService.getMedecin(); 
  }


  // addEvent() {
  //   const eventData = this.eventForm.value;
  //   const dateTime = moment(eventData.date + ' ' + eventData.time, 'YYYY-MM-DD HH:mm').toDate();

  //   this.calendarOptions.events.push({
  //     title: eventData.title,
  //     start: dateTime,
  //     color: '#38B198'
  //   });

  //   this.eventForm.reset();
  // }

  onSubmit() {

    if (this.rdvForm.valid) {
      const newAppoitment = this.rdvForm.value as CreateAppoitment;
      this.rdvService.CreateAppoitment(newAppoitment);
  
      const event = {
        Id: this.numRecords + 1,
        Subject: 'Rendez-vous',
        StartTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
        EndTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
        IsAllDay: false,
        EventType: 'time'
      };
      
      this.numRecords++;

    if (this.eventSettings.dataSource instanceof DataManager) {
      this.eventSettings.dataSource.insert(event);
    } else if (Array.isArray(this.eventSettings.dataSource)) {
      this.eventSettings.dataSource.push(event);
    }
  

     
      this.rdvForm.reset();
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }

    // if (this.rdvForm.valid) {
    //   const newAppoitment = this.rdvForm.value as CreateAppoitment;
    //   this.rdvService.CreateAppoitment(newAppoitment);
    //   console.warn(newAppoitment)

    //   if (this.eventSettings.dataSource) {
    //     this.eventSettings.dataSource.push({
    //       Subject: 'Rendez-vous',
    //       StartTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
    //       EndTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
    //       IsAllDay: false,
    //       EventType: 'time'
    //     });
    //   } else {
    //     this.eventSettings.dataSource = [{
    //       Subject: 'Rendez-vous',
    //       StartTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
    //       EndTime: new Date(newAppoitment.date + ' ' + newAppoitment.time),
    //       IsAllDay: false,
    //       EventType: 'time'
    //     }];
      

      
     
      
  }
  
  



  confirm() {
    this.dialogService.closeDialog();
  }


  deleteAppoitement(){
    this.rdvService.supprimerAppoitment(this.rdvForm.value.id);
  }  

  openDialog() {
    const dialogRef = this.dialog.open(CreationrendezvousComponent,{
      width: '650px',
      height:'570px',
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Cette pop up a été ferme');
      });
    }


  }