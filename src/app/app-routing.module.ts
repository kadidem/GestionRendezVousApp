import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationrendezvousComponent } from './creationrendezvous/creationrendezvous.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [  
     { path: 'Acceuil', component: AcceuilComponent },
    // { path: 'index', component: HeaderComponent},
    // { path: 'Rendezvous', component: CreationrendezvousComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
