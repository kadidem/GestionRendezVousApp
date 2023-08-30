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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AccueilComponent } from './accueil/accueil.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatDialogModule} from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
// import * as moment from 'moment';

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
    AccueilComponent,
    ListeRendezVousComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ScheduleModule, 
    RecurrenceEditorModule,
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
