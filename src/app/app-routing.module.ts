import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
=======
>>>>>>> 654156e4375ad28da34b5941f8828b5cfa279236
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
<<<<<<< HEAD
import { ChoixInscriptionComponent } from './choix-inscription/choix-inscription.component';

const routes: Routes = [
  { path: '', component: ChoixInscriptionComponent },
  { path: 'admin-accueil', component: AdminaccueilComponent },
=======
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },  
  { path: 'admin-accueil', component: AdminaccueilComponent},
>>>>>>> 654156e4375ad28da34b5941f8828b5cfa279236
  { path: 'create-admin', component: CreateAdminAccountComponent },
  { path: 'liste-doc', component: ListemedecinComponent },
  { path: 'add-doc', component: AjoutermedecinComponent },
  { path: 'liste-rdv', component: CalendrierrendezvousComponent },
  { path: 'details-rdv', component: DetailsrendezvousComponent },
  { path: 'rdv', component: CreationrendezvousComponent },
  { path: 'accueil', component: AcceuilComponent},
  {path:'loginpatient',component:AjouterpatientComponent},
  {path:'createpatient',component:PatientloginComponent},
  {path: 'login', component: AdminloginComponent},
  {path: 'listes-rdv', component:ListeRendezVousComponent},
  { path: 'listepatient',component:ListepatientComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
