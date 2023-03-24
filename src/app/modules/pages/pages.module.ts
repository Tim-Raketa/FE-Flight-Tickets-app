import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegularUserComponent } from './regular-user/regular-user.component';
import { AdministratorComponent } from './administrator/administrator.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    RegularUserComponent,
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule ]
})
export class PagesModule { }
