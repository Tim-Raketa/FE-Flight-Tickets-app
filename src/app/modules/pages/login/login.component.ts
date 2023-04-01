import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { AuthService } from './auth.service';
import { Login } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit()  {}

  get email(){
    return this.loginUserForm.get('email');
  }

  get password(){
    return this.loginUserForm.get('password');
  }

  goToRegistration =  () => {
    this.router.navigateByUrl('/registration');
  };

  goToHome =  () => {
    this.router.navigateByUrl('/home');
  };
  
  public loginDTO: Login = new Login();
  
  login(){
      this.loginDTO.username = this.loginUserForm.get("email")?.value as string
      this.loginDTO.password = this.loginUserForm.get("password")?.value as unknown as string
      this.authService.login(this.loginDTO).pipe(catchError(res => {
        alert("Wrong email or password!") 
        return EMPTY
      })).subscribe(res => {
        let role = res.role
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('role', role);
  
        if (role == 'ROLE_ADMIN') this.router.navigate(['/administrator']);
        else if (role == 'ROLE_USER') this.router.navigate(['/regularUser']);
        else {
             localStorage.removeItem('token');
             this.router.navigate(['/']);
           }
        });
  }
}
