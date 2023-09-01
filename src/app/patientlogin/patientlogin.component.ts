import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPatientService } from '../services/login-patient.service';


@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent {
  registerForm: FormGroup;
  registrationError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private LoginService: LoginPatientService
  ) {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required], // Ajouter le champ du nom
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required], // Ajouter le champ du numéro de téléphone
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      // const name = this.registerForm.get('nom')!.value;
      // const email = this.registerForm.get('email')!.value;
      // const numero = this.registerForm.get('numero')!.value;
      // const password = this.registerForm.get('password')!.value;

      // const newPatient = { name, email, numero, password }; // Créer un objet avec les valeurs
      const allData=this.registerForm.value;
      this.LoginService.registerPatient(allData);
      // Handle success or error messages
    }
  }
}
