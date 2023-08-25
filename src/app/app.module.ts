import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutermedecinComponent } from './ajoutermedecin/ajoutermedecin.component';
import { AjouterpatientComponent } from './ajouterpatient/ajouterpatient.component';
import { ListepatientComponent } from './listepatient/listepatient.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { CalendrierrendezvousComponent } from './calendrierrendezvous/calendrierrendezvous.component';
import { CreationrendezvousComponent } from './creationrendezvous/creationrendezvous.component';
import { DetailsrendezvousComponent } from './detailsrendezvous/detailsrendezvous.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutermedecinComponent,
    AjouterpatientComponent,
    ListepatientComponent,
    ListemedecinComponent,
    CalendrierrendezvousComponent,
    CreationrendezvousComponent,
    DetailsrendezvousComponent,
    AdminloginComponent,
    AdminaccueilComponent,
    CreateAdminAccountComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
