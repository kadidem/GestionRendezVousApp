import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ShowelementService } from './services/showelement.service';
import { LoginPatientService } from './services/login-patient.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';



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
  isCreateAdminAccountPage: boolean = false;
  isAdminAccueilPage: boolean = false;
  isCreatePatientAccountPage: boolean = false;
  isPatientLoginPage: boolean = false;
  isListeDocPage: boolean = false;
  isListesRendezVousPage: boolean = false;
  isListeRendezVousPage: boolean = false;
  isBlankPage: boolean = false;
  isListePatientPage: boolean = false;
  // isConnected: boolean = false;
  // isUserLoggedIn: boolean = false;
  isLogAccueilPage: boolean = false;


  constructor(private router: Router, private showElementService : ShowelementService, private connect : LoginPatientService) {
  this.isVisible = false;
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.isBlankPage = event.url === '/';
    }
    if (event instanceof NavigationEnd) {
      this.isAccueilPage = event.url === '/accueil';
    }
    if (event instanceof NavigationEnd) {
      this.isLoginPage = event.url === '/login';
    }
    if (event instanceof NavigationEnd) {
      this.isCreateAdminAccountPage = event.url === '/create-admin';
    }
    if (event instanceof NavigationEnd) {
      this.isAdminAccueilPage = event.url === '/admin-accueil';
    }
    if (event instanceof NavigationEnd) {
      this.isPatientLoginPage = event.url === '/patient-login';
    }
    if (event instanceof NavigationEnd) {
      this.isCreatePatientAccountPage = event.url === '/create-patient';
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
    if (event instanceof NavigationEnd) {
      this.isListePatientPage = event.url === '/liste-patient';
    }
   

  });
   }

  ngOnInit(): void {
    this.connect.isUserLoggedIn = false; 
    
  }

  OnChange(): any {
    this.connect.isUserLoggedIn = true; 
  }

  
  isUserLoggedIn() {
    return this.connect.getIsUserLoggedIn();
  }

  

  
  log(isVisible: boolean): any { 
    this.showElementService.toggleVisibility;
  }

  tr :boolean = this.log(true);
  
  // isLoggedIn$!: Observable<boolean>; 
  
  logoutAdmin(){
    Swal.fire({
      title: 'Voulez vous vraiment vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#38B198',
      cancelButtonColor: 'red',
      cancelButtonText:'Non'
    })
    .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Vous avez bien été déconnecté bye, à bientôt',
            icon:'success',
            confirmButtonColor: '#38B198',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/login']);
        }
      })
  }


  logoutPatient() {
    Swal.fire({
      title: 'Voulez vous vraiment vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#38B198',
      cancelButtonColor: 'red',
      cancelButtonText:'Non'
    })
    .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Vous avez bien été déconnecté bye, à bientôt',
            icon:'success',
            confirmButtonColor: '#38B198',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/patient-login']);
        }
      })
   
  }

  navigateToLoginPage(){
    this.router.navigate(['/patient-login']);
  }


 




  // constructor(private route: ActivatedRoute) {
  //   this.route.url.subscribe(urlSegments => {
  //     this.isLoginPage = urlSegments[0]?.path === '/admin-accueil';
  //   });
  // }


}
