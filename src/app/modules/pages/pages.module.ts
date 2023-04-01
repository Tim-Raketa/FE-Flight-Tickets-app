import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { MaterialModule } from 'src/app/material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegularUserComponent } from './regular-user/regular-user.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


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
    MaterialModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
   ]
})
export class PagesModule { }
