import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPatientService } from '../services/login-patient.service';

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
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      const isValid = this.loginService.loginPatient(email, password);
      if (isValid) {
        // Gérer la redirection après une connexion réussie
      } else {
        this.loginError = 'Identifiants invalides. Veuillez réessayer.';
      }
    }
  }
}
