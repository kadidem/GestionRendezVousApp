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

@NgModule({
  declarations: [
    AppComponent,
    AjoutermedecinComponent,
    AjouterpatientComponent,
    ListepatientComponent,
    ListemedecinComponent,
    CalendrierrendezvousComponent,
    CreationrendezvousComponent,
    DetailsrendezvousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
