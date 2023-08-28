import { Component , ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { AjouterMedecinService } from '../services/ajouter-medecin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjouterMedecin } from '../models/ajouter-medecin';





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


   medecinForm! : FormGroup;
  constructor(private formBuilder: FormBuilder, private medecinService: AjouterMedecinService) { 

    this.medecinForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      specialite: ['', Validators.required],
      image: ['null']
    });
  }

  // public saveMedecin(){
  //   console.log(this.medecinForm.value);
  //   }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.medecinForm.valid) {
      const newMedecin = this.medecinForm.value as AjouterMedecin;
      this.medecinService.ajoutMedecin(newMedecin);
      console.warn(newMedecin)
      this.medecinForm.reset();
    }
  }
      
  deleteMedecin(){
    this.medecinService.supprimerMedecin(this.medecinForm.value.id);
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
