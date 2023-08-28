import { Component , ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';


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



  @Output() formSubmitted = new EventEmitter<void>()
  onSubmit() {

    // Émettre l'événement pour signaler que le formulaire a été soumis
    this.formSubmitted.emit();

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
