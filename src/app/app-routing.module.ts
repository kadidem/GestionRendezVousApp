import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  // { path: '', redirectTo: 'admin-login', component: AdminloginComponent},
  { path: 'admin-accueil', component: AdminaccueilComponent },
  { path: 'admin-login', component: AdminloginComponent },
  // { path: 'create-admin-account', component: CreateAdminAccountComponent },
  { path: 'liste-medecin', component: ListemedecinComponent },
  { path: 'accueil', component: AccueilComponent },
  // { path: 'adminaccueil', component: AdminaccueilComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
