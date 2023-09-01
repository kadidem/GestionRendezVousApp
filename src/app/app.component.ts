import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ShowelementService } from './services/showelement.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowelementService]
})
export class AppComponent implements OnInit {

  title = 'Gestion Rendez Vous App';

  isVisible = true;
  isAccueilPage: boolean = false;
  isLoginPage: boolean = false;
  isCreateAccountPage: boolean = false;
  isAdminAccueilPage: boolean = false;
  isCreatePatientPage: boolean = false;
  isPatientLoginPage: boolean = false;
  isListeDocPage: boolean = false;
  isListesRendezVousPage: boolean = false;
  isListeRendezVousPage: boolean = false;
  isBlankPage: boolean = false;


  constructor(private router: Router, private showElementService : ShowelementService) {
  this.isVisible = false;
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.isBlankPage = event.url === '';
    }
    if (event instanceof NavigationEnd) {
      this.isAccueilPage = event.url === '/accueil';
    }
    if (event instanceof NavigationEnd) {
      this.isLoginPage = event.url === '/login';
    }
    if (event instanceof NavigationEnd) {
      this.isCreateAccountPage = event.url === '/create-admin';
    }
    if (event instanceof NavigationEnd) {
      this.isAdminAccueilPage = event.url === '/admin-accueil';
    }
    if (event instanceof NavigationEnd) {
      this.isPatientLoginPage = event.url === '/patient-login';
    }
    if (event instanceof NavigationEnd) {
      this.isCreateAccountPage = event.url === '/create-patient';
    }
    // listes des rendez vous 
    if (event instanceof NavigationEnd) {
      this.isListesRendezVousPage = event.url === '/listes-rdv';
    }
    // rendez vous calendrier
    if (event instanceof NavigationEnd) {
      this.isListeRendezVousPage = event.url === '/liste-rdv';
    }
    
    if (event instanceof NavigationEnd) {
      this.isListeDocPage = event.url === '/liste-doc';
    }

  });
   }

  ngOnInit(): void {
    // this.showEL.showElement();
    
  }

  log(isVisible: boolean): any { 
    this.showElementService.toggleVisibility;
  }

  tr :boolean = this.log(true);
  

  



  // constructor(private route: ActivatedRoute) {
  //   this.route.url.subscribe(urlSegments => {
  //     this.isLoginPage = urlSegments[0]?.path === '/admin-accueil';
  //   });
  // }


}
