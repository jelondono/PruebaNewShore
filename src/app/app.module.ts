import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {  HouseMagicanComponent } from './components/house-magican/house-magican.component';

import localeCO from '@angular/common/locales/es-CO';


// Services
import {  MagicanService } from './services/magican-services/magican.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { GeneralInterface } from './models/General.model';
import { FuncionesGlobalesService } from './services/funcionesGlobales.service';
import { registerLocaleData } from '@angular/common';



registerLocaleData(localeCO, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HouseMagicanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    MagicanService,
    GeneralInterface,
    FuncionesGlobalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
