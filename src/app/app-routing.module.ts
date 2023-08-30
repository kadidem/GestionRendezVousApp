import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AjoutermedecinComponent } from './ajoutermedecin/ajoutermedecin.component';
import { CalendrierrendezvousComponent } from './calendrierrendezvous/calendrierrendezvous.component';
import { DetailsrendezvousComponent } from './detailsrendezvous/detailsrendezvous.component';
import { CreationrendezvousComponent } from './creationrendezvous/creationrendezvous.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },  
  { path: 'admin-accueil', component: AdminaccueilComponent},
  { path: 'create-admin', component: CreateAdminAccountComponent },
  { path: 'liste-doc', component: ListemedecinComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'add-doc', component: AjoutermedecinComponent },
  { path: 'liste-rdv', component: CalendrierrendezvousComponent },
  { path: 'details-rdv', component: DetailsrendezvousComponent },
  { path: 'rdv', component: CreationrendezvousComponent },
  {path: 'login', component: AdminloginComponent},
  {path: 'listes-rdv', component: ListeRendezVousComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
