import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  goToAcceuil() {
    this.router.navigate(['/', 'acceuil']);
  }
  goToAboutUs() {
    this.router.navigate(['/', 'Apropos']);
  }
  goToDocteurs() {
    this.router.navigate(['/', 'Docteurs']);

}
}
