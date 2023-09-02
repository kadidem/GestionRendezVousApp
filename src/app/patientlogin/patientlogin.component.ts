import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPatientService } from '../services/login-patient.service';
import { AddPatientService } from '../services/add-patient.service';
import { AddAppoitmentService } from '../services/add-appoitment.service';
import { Patient } from '../models/patient';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent  {

  registerForm: FormGroup;
  
  registrationError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private addPatientService: AddPatientService,
    private route : Router
  ) {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required], // Ajouter le champ du prenom
      nom: ['', Validators.required], // Ajouter le champ du nom
      username: ['', Validators.required], // Ajouter le champ du nom d'utilisateur
      email: ['', [Validators.required, Validators.email]],// champs d'email
      telephone: ['', Validators.required], // Ajouter le champ du numéro de téléphone
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

 

  // isUserLoggedIn: boolean = false;
  onSubmit() {

    if (this.registerForm.valid) {
      const newAppoitment = this.registerForm.value as Patient;
      this.addPatientService.ajoutPatient(newAppoitment);
 
      

      Swal.fire(
        'Compte créer!',
        'Voter compte a été créée avec succès veuiller \n vous connecter pour continuer à naviguer svp!',
        'success'
      )
      this.registerForm.reset();
      this.route.navigate(['/patient-login']);
      
      }
     
      
  }

  deletePatient(){
    this.addPatientService.supprimerPatient(this.registerForm.value.if);
  }

}
