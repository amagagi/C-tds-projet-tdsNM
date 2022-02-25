import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseradComponent } from './users/userad/userad.component';
import { UserclComponent } from './users/usercl/usercl.component';
import { InscriptionComponent } from './connexion/inscription/inscription.component';
import { ConnecterComponent } from './connexion/connecter/connecter.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleListeComponent } from './article/article-liste/article-liste.component';
import { ArticleSimpleComponent } from './article/article-simple/article-simple.component';
import { EnteteComponent } from './Accueil/entete/entete.component';
import { EvenementFormComponent } from './evenement/evenement-form/evenement-form.component';
import { EvenementListeComponent } from './evenement/evenement-liste/evenement-liste.component';
import { EvenementSimpleComponent } from './evenement/evenement-simple/evenement-simple.component';
import { ServiceFormComponent } from './services/service-form/service-form.component';
import { ServiceListeComponent } from './services/service-liste/service-liste.component';
import { ServiceSimpleComponent } from './services/service-simple/service-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    UseradComponent,
    UserclComponent,
    InscriptionComponent,
    ConnecterComponent,
    ArticleFormComponent,
    ArticleListeComponent,
    ArticleSimpleComponent,
    EnteteComponent,
    EvenementFormComponent,
    EvenementListeComponent,
    EvenementSimpleComponent,
    ServiceFormComponent,
    ServiceListeComponent,
    ServiceSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
