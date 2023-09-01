import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AjoutermedecinComponent } from './ajoutermedecin/ajoutermedecin.component';
import { CalendrierrendezvousComponent } from './calendrierrendezvous/calendrierrendezvous.component';
import { DetailsrendezvousComponent } from './detailsrendezvous/detailsrendezvous.component';
import { CreationrendezvousComponent } from './creationrendezvous/creationrendezvous.component';
import { ListepatientComponent } from './listepatient/listepatient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterpatientComponent } from './ajouterpatient/ajouterpatient.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { FullCalendarModule } from '@fullcalendar/angular';




const routes: Routes = [

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AcceuilComponent },  
  { path: '', component: AcceuilComponent },
  { path: 'admin-accueil', component: AdminaccueilComponent },
  { path: 'create-admin', component: CreateAdminAccountComponent },
  { path: 'liste-doc', component: ListemedecinComponent },
  { path: 'add-doc', component: AjoutermedecinComponent },
  { path: 'liste-rdv', component: CalendrierrendezvousComponent },
  { path: 'details-rdv', component: DetailsrendezvousComponent },
  { path: 'rdv', component: CreationrendezvousComponent },
  //  { path: 'accueil', component: AcceuilComponent},
  {path:'loginpatient',component:AjouterpatientComponent},
  {path: 'login', component: AdminloginComponent},
  {path: 'listes-rdv', component:ListeRendezVousComponent},
  {path: 'rdv', component:CreationrendezvousComponent},
  { path: 'listepatient',component:ListepatientComponent},
  { path: 'patient-login',component:AjouterpatientComponent},
  { path: 'create-patient',component:PatientloginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
