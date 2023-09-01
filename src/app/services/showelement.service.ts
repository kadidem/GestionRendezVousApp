import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowelementService {

  isVisible: boolean = false;

  constructor() {
    this.isVisible = false;
   
   }

   showElement(){
    this.isVisible = true;
   }

   toggleVisibility(){
    this.isVisible =!this.isVisible;
   }



}
