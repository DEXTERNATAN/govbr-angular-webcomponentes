import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { FormulariosComponent } from './formularios/formularios.component';

// Importação do Webcomponents Angular do GovBR
import { WebcomponentsAngularModule } from '@govbr-ds/webcomponents-angular';
import '@govbr-ds/core/dist/core.min.css';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentesComponent,
    FormulariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcomponentsAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
