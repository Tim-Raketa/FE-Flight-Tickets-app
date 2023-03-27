import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatch } from '../../custom validators/passwordMatch';
import { UserDTO } from '../../model/UserDTO';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      jmbg: new FormControl('', [Validators.required, Validators.pattern('[0-9]{13}$')])
    }, [ passwordMatch("password", "confirmPassword") ])

  constructor(private router: Router, private service: RegistrationService) {}

  get email(){
    return this.registerUserForm.get('email');
  }

  get password(){
    return this.registerUserForm.get('password');
  }

  get confirmPassword(){
    return this.registerUserForm.get('confirmPassword');
  }

  get name(){
    return this.registerUserForm.get('name');
  }

  get surname(){
    return this.registerUserForm.get('surname');
  }

  get jmbg(){
    return this.registerUserForm.get('jmbg');
  }

  ngOnInit() {}

  goToLogin =  () => {
    this.router.navigateByUrl('/login');
  };

  goToHome =  () => {
    this.router.navigateByUrl('/home');
  };

  register =  () => {
    let email = this.registerUserForm.get("email")?.value
    let password = this.registerUserForm.get("password")?.value
    let name = this.registerUserForm.get("name")?.value
    let surname = this.registerUserForm.get("surname")?.value
    let jmbg = this.registerUserForm.get("jmbg")?.value
    let user: UserDTO = {
      email: email ? email : '',
      password: password ? password : '',
      name: name ? name : '',
      surname: surname ? surname : '',
      jmbg: jmbg ? jmbg : '',
    }
    this.service.submit(user).subscribe(res => {
      console.log(res);
      alert("Registration completed.");
      this.registerUserForm.reset( { } );
    }, error => 
    {
      console.log(error)
    }
    
    );
      
  };
}
