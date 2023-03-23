import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule ]
})
export class PagesModule { }
