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

  constructor(private router: Router, private showElementService : ShowelementService) {
  this.isVisible = false;
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.isAccueilPage = event.url === '/accueil';
    }
    if (event instanceof NavigationEnd) {
      this.isLoginPage = event.url === '/login';
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
