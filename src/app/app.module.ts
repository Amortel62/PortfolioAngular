import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiseEnPlaceComponent } from './mise-en-place/mise-en-place.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreerUnProjetComponent } from './creer-un-projet/creer-un-projet.component';

const routes: Routes = [

  {
    path: 'miseenplace',
    component: MiseEnPlaceComponent
  },
  {
    path: "creerunprojet",
    component: CreerUnProjetComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MiseEnPlaceComponent,
    NotFoundComponent,
    CreerUnProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
