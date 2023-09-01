import { CalendarOptions } from '@fullcalendar/core';
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
import { Router } from '@angular/router';



@Component({
  selector: 'app-creationrendezvous',
  templateUrl: './creationrendezvous.component.html',
  styleUrls: ['./creationrendezvous.component.css']
})
export class CreationrendezvousComponent implements OnInit {

  
  medecinsSelect !: Medecin [] | any[];

  rdvForm !: FormGroup;
  eventForm!: FormGroup;

  numRecords: number = 0;
 

  constructor(
    private formBuilder: FormBuilder,
    private dialogService : DialogService,
    private dialog: MatDialog,
    private medecinService: AddDoctorService,
    private rdvService: AddAppoitmentService,
    private route : Router
  ) {
    this.rdvForm = this.formBuilder.group({
      id: ['null'],
      date: ['', Validators.required],
      time: ['', Validators.required],
      doc: ['', Validators.required],
      motif: ['', Validators.required]
    });
  }
  
  
  ngOnInit(): void {
    this.medecinsSelect = this.medecinService.getMedecin(); 

  }


  onSubmit() {

    if (this.rdvForm.valid) {
      const newAppoitment = this.rdvForm.value as CreateAppoitment;
      this.rdvService.CreateAppoitment(newAppoitment);
      Swal.fire(
        'Ajouter avec succès!',
        'Les données sont enrégistrés avec succès!',
        'success'
      )
      this.rdvForm.reset();
      this.route.navigate(['/listes-rdv']);
      
    }
     
      
  }
  
  



  confirm() {
    this.dialogService.closeDialog();
  }


  deleteAppoitement(){
    this.rdvService.deleteAppoitment(this.rdvForm.value.id);
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

