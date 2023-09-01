import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AddDoctorService } from '../services/add-doctor.service';
import { Medecin } from '../models/medecin';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
[x: string]: any;
sliderConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  };

   slideIndex:number = 1;

   medecins: Medecin[] = []; // Liste des médecins à afficher dans le carrousel


  


constructor(private router: Router, private medecinService: AddDoctorService) { }

ngOnInit(): void {
  this.medecins = this.medecinService.getMedecin();

  this.showSlides(this.slideIndex);

  const obs$ = interval(7000);
  obs$.subscribe(() => {
    this.plusSlides(1);
  });

  }

  getMedecinImagePath(medecin: Medecin): any {
    return `/assets/image/${medecin.imagePath}`; 
  }



    plusSlides(n:number) {
      this.showSlides(this.slideIndex += n);
    }

    currentSlide(n:number) {
      this.showSlides(this.slideIndex = n);
    }

    showSlides(n:number) {
      let i;
      let slides =  document.getElementsByClassName("mySlides");
      //let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}    
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
        slides[i].classList.remove("show");
        //slides[i].style.display = "none";  
      }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
 // slides[this.slideIndex-1].style.display = "block"; 
    slides[this.slideIndex-1].classList.add("show");
    slides[this.slideIndex-1].classList.remove("hide");
      //dots[this.slideIndex-1].className += " active";
    }

   }

