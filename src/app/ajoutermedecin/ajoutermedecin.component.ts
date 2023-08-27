import { Component , ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-ajoutermedecin',
  templateUrl: './ajoutermedecin.component.html',
  styleUrls: ['./ajoutermedecin.component.css']
})
export class AjoutermedecinComponent {

  imagePreview: string | ArrayBuffer | null = '/assets/image/Rectangle 89.png';
   
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

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
