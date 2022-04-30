import { AttributeServiceService } from './../services/attribute-service.service';
import { AccesoriesServiceService } from './../services/accesories-service.service';
import { AccesoriesDataServiceService } from './../services/accesories-data-service.service';
import { SetDataServiceService } from '../services/set-data-service.service';
import { SetServiceService } from '../services/set-service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetComponentComponent } from './set-component/set-component.component';
import { AccesoriesComponentComponent } from './accesories-component/accesories-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AttributeDataServiceService } from 'src/services/attribute-data-service.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes=[

  {path:'',component:HomeComponentComponent},
  {path:'set',component:SetComponentComponent},
  {path:'accesories',component:AccesoriesComponentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SetComponentComponent,
    AccesoriesComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [SetServiceService,SetDataServiceService,AttributeDataServiceService,AccesoriesDataServiceService,AccesoriesServiceService,AttributeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
