import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPatientService } from '../services/login-patient.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterpatient',
  templateUrl: './ajouterpatient.component.html',
  styleUrls: ['./ajouterpatient.component.css']
})
export class AjouterpatientComponent {

  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private loginService: LoginPatientService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isUserLoggedIn: boolean = false;

  login() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    if (this.loginService.loginPatient(email, password)) {
      // Rediriger vers la page d'accueil ou une autre page appropriée
      Swal.fire({
        title: 'Bienvenue!',
        text: 'Vous êtes connecté!',
        icon:'success',
        confirmButtonColor: '#38B198',
        // cancelButtonColor: '#d33',
      });
      this.route.navigate(['/accueil']);
      this.loginService.setIsUserLoggedIn(true);
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
