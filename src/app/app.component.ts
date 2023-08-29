import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion Rendez Vous App';


  isLoginPage = false;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(urlSegments => {
      this.isLoginPage = urlSegments[0]?.path === '/login';
    });
  }


}
