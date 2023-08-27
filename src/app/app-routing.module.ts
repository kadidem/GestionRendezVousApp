import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaccueilComponent } from './adminaccueil/adminaccueil.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateAdminAccountComponent } from './create-admin-account/create-admin-account.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AjoutermedecinComponent } from './ajoutermedecin/ajoutermedecin.component';

const routes: Routes = [
  // { path: '', redirectTo: 'admin-login', component: AdminloginComponent},
  { path: 'admin-accueil', component: AdminaccueilComponent },
  { path: 'login', component: AdminloginComponent},
  { path: 'create-admin', component: CreateAdminAccountComponent },
  { path: 'liste-doc', component: ListemedecinComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'add-doc', component: AjoutermedecinComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
