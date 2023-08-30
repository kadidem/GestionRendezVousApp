import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion Rendez Vous App';

  constructor(private router: Router) { }


  // isLoginPage = true;

  // constructor(private route: ActivatedRoute) {
  //   this.route.url.subscribe(urlSegments => {
  //     this.isLoginPage = urlSegments[0]?.path === '/admin-accueil';
  //   });
  // }


}
