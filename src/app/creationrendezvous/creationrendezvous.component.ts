import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Medecin } from '../models/medecin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { AddDoctorService } from '../services/add-doctor.service';
import { CreateAppoitment } from '../models/create-appoitment';
import Swal from 'sweetalert2';
import { DialogService } from '../services/dialog.service';


@Component({
  selector: 'app-creationrendezvous',
  templateUrl: './creationrendezvous.component.html',
  styleUrls: ['./creationrendezvous.component.css']
})
export class CreationrendezvousComponent implements OnInit {

  medecinsSelect !: Medecin [] | any[];

  rdvForm !: FormGroup;

  constructor(private formBuilder: FormBuilder , private dialogService : DialogService , private dialog: MatDialog , private medecinService: AddDoctorService ,private rdvService: AddAppoitmentService) {

    this.rdvForm = this.formBuilder.group({
      id:['null'],
      date: ['', Validators.required],
      time: ['', Validators.required],
      doc: ['', Validators.required],
      motif: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.medecinsSelect = this.medecinService.getMedecin(); 
  }

  
  


  onSubmit() {

    if (this.rdvForm.valid) {
      const newAppoitment = this.rdvForm.value as CreateAppoitment;
      this.rdvService.CreateAppoitment(newAppoitment);
      console.warn(newAppoitment)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      this.rdvForm.reset();
      
    }
  }
  calendarOptions: any = {
    // Autres options du calendrier
    events: [] // Tableau pour stocker les événements (rendez-vous)
  };

  // onSubmit() {
  //   if (this.rdvForm.valid) {
  //     const newAppoitment = this.rdvForm.value as CreateAppoitment;
  //     this.rdvService.CreateAppoitment(newAppoitment);
      
  //     // Ajoutez l'événement au calendrier
  //     this.calendarOptions.events.push({
  //       title: 'Rendez-vous',
  //       start: newAppoitment.date,
  //       color: '#38B198'
  //     });
      
  //     this.rdvForm.reset();
  //   }
  // }

  confirm() {
    // Effectuer des actions de confirmation
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
