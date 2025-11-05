import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { Deportesv2Component } from '../components/deportesv2/deportesv2.component';
import { FormsBinding } from '../components/formsbinding/formsbinding.component';
import { SumarNumeros } from '../components/sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar-component/tablamultiplicar-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    Deportesv2Component,
    FormsBinding,
    SumarNumeros,
    TablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
