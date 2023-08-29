import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AjoutermedecinComponent } from './ajoutermedecin/ajoutermedecin.component';
import { CalendrierrendezvousComponent } from './calendrierrendezvous/calendrierrendezvous.component';
import { DetailsrendezvousComponent } from './detailsrendezvous/detailsrendezvous.component';
import { CreationrendezvousComponent } from './creationrendezvous/creationrendezvous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterpatientComponent } from './ajouterpatient/ajouterpatient.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';

const routes: Routes = [
  // { path: '', redirectTo: 'admin-login', component: AdminloginComponent},
  { path: 'admin-accueil', component: AdminaccueilComponent },
  { path: 'login', component: AdminloginComponent},
  { path: 'create-admin', component: CreateAdminAccountComponent },
  { path: 'liste-doc', component: ListemedecinComponent },
  { path: 'add-doc', component: AjoutermedecinComponent },
  { path: 'liste-rdv', component: CalendrierrendezvousComponent },
  { path: 'details-rdv', component: DetailsrendezvousComponent },
  { path: 'rdv', component: CreationrendezvousComponent },
  { path: 'accueil', component: AcceuilComponent},
  {path:'loginpatient',component:AjouterpatientComponent},
  {path:'createpatient',component:PatientloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
