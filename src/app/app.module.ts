import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
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
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';


@NgModule({
  declarations: [
     AppComponent,
     AjoutermedecinComponent,
     AjouterpatientComponent,
     ListemedecinComponent,
     CalendrierrendezvousComponent,
     CreationrendezvousComponent,
     DetailsrendezvousComponent,
     AdminloginComponent,
     AdminaccueilComponent,
     CreateAdminAccountComponent,
     HeaderComponent,
     AcceuilComponent, 
     FooterComponent,
     PatientloginComponent,
     AdminloginComponent,
    AdminaccueilComponent,
    ListeRendezVousComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      SlickCarouselModule,
      NgbModule,
      CommonModule,
      MatDialogModule,
      FullCalendarModule,
      ReactiveFormsModule,
     NgxPaginationModule,
     HttpClientModule,
     
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
