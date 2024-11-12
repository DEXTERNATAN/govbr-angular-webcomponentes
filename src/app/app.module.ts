import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Importação do Webcomponents Angular do GovBR
import { WebcomponentsAngularModule } from '@govbr-ds/webcomponents-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@govbr-ds/core/dist/core.min.css';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcomponentsAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
