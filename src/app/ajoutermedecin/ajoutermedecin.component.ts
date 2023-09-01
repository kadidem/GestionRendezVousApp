import { Component , ViewChild, ElementRef, EventEmitter, Output, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddDoctorService } from '../services/add-doctor.service';
import { MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material/dialog';
import { Medecin } from '../models/medecin.js';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-ajoutermedecin',
  templateUrl: './ajoutermedecin.component.html',
  styleUrls: ['./ajoutermedecin.component.css']
})
export class AjoutermedecinComponent {

  public imagePreview: string | ArrayBuffer | null = '/assets/image/Rectangle 89.png';
   
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

  isEditMode = false;
  isFormVisible = false;



  // @Output() formSubmitted = new EventEmitter<void>()


  //  selectedFile: File | null = null;
  

  medecinForm! : FormGroup;
  constructor(private formBuilder: FormBuilder, private medecinService: AddDoctorService) { 

    this.medecinForm = this.formBuilder.group({
      id:['null'],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      specialite: ['', Validators.required],
      image: ['']
    });
  }

  

  ngOnInit(): void {

    // this.medecin = this.medecinService.getMedecin();
    
   
  }

  onSubmit() {

    if (this.medecinForm.valid) {
      const newMedecin = this.medecinForm.value as Medecin;
      this.medecinService.ajoutMedecin(newMedecin);
      this.medecinService.getMedecin();
      console.warn(newMedecin)
      Swal.fire(
        'Ajouter avec succès!',
        'Les données sont enrégistrés avec succès!',
        'success'
      )
      this.medecinForm.reset();
       
    }
  }
      
  deleteMedecin(){
    this.medecinService.supprimerMedecin(this.medecinForm.value.id);
    this.medecinService.getMedecin();
    
  }   

        toggleFormWithDelay() {
          setTimeout(() => {
            this.isFormVisible = !this.isFormVisible;
          }, 1000);// Delay of 1 second
        }
      toggleForm(isEditMode: boolean) {
        this.isFormVisible = true;
        this.isEditMode = isEditMode;
      }

  handleImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerImageUpload() {
    this.imageInput.nativeElement.click();
  }


}
