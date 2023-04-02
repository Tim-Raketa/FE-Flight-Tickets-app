import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegistrationComponent } from "./modules/pages/registration/registration.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { RegularUserComponent } from "./modules/pages/regular-user/regular-user.component";
import { AdministratorComponent } from "./modules/pages/administrator/administrator.component";
import { CreateFlightComponent } from "./modules/pages/administrator/create-flight/create-flight.component";
import { AuthorizationGuard } from "./modules/pages/login/authorization.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrator/createFlight', component: CreateFlightComponent,
    data: {
      allowedRoles: ['ROLE_ADMIN']
    },
    canActivate: [AuthorizationGuard] },

  { path: 'regularUser', component: RegularUserComponent,
    data: {
      allowedRoles: ['ROLE_USER']
    },
    canActivate: [AuthorizationGuard]},
  { path: 'administrator', component: AdministratorComponent,
    data: {
    allowedRoles: ['ROLE_ADMIN']
  },
  canActivate: [AuthorizationGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
