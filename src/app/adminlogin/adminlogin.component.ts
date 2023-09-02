import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminloginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private loginAdminService: AdminloginService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    if (this.loginAdminService.loginAdmin(email,password)) {
      // Rediriger vers la page d'accueil ou une autre page appropriée
      Swal.fire({
        title: 'Bienvenue!',
        text: 'Vous êtes connecté!',
        icon:'success',
        confirmButtonColor: '#38B198',
        // cancelButtonColor: '#d33',
      });
      this.route.navigate(['/liste-doc']);
    } else {
      Swal.fire({ // Utilisation correcte de Swal.fire
        icon: 'error',
        title: 'Erreur',
        text: 'Email ou mot de passe invalide'
      });
    }
    this.loginForm.reset();
  }

}
