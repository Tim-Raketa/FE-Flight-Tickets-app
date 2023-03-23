import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registration } from '../../model/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'MID';
  registerUserForm = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })

  public registration: Registration = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
