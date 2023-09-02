import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddAdminService } from '../services/add-admin.service';
import { Admin } from '../models/admin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-admin-account',
  templateUrl: './create-admin-account.component.html',
  styleUrls: ['./create-admin-account.component.css']
})
export class CreateAdminAccountComponent {

  signup: FormGroup|any;
  signuserError:string | null = null;
  

  constructor(
    private formBuilder: FormBuilder,
    private addAdminService: AddAdminService,
    private route : Router
  ) {
    this.signup = this.formBuilder.group({
    
      username: ['', Validators.required], // Ajouter le champ du nom d'utilisateur
      email: ['', [Validators.required, Validators.email]],// champs d'email
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

 


  onSubmit() {

    if (this.signup.valid) {
      const newAppoitment = this.signup.value as Admin;
      this.addAdminService.ajoutAdmin(newAppoitment);
      Swal.fire(
        'Compte créer!',
        'Voter compte a été créée avec succès veuiller \n vous connecter pour continuer à naviguer svp!',
        'success'
      )
    
      this.route.navigate(['/login']);
      
      }
      // else{
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Erreur',
      //     text: 'Email ou mot de passe incorrect',
      //   })
      // }
     
      
  }

  deletePatient(){
    this.addAdminService.supprimerAdmin(this.signup.value.id);
  }


}
