import { Component, OnInit } from '@angular/core';
import { ShowelementService } from '../services/showelement.service';

@Component({
  selector: 'app-adminaccueil',
  templateUrl: './adminaccueil.component.html',
  styleUrls: ['./adminaccueil.component.css']
})
export class AdminaccueilComponent implements OnInit {

  constructor(private showEL: ShowelementService ) { }


  ngOnInit(): void {
    
    this.showEL.showElement();
  }

  log(isVisible: boolean) : any{
    this.showEL.toggleVisibility;
  }
  fl :boolean = this.log(true);

 

}
