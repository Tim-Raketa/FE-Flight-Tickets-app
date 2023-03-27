import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  route: string = 'http://localhost:8084/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  
  submit(registeringUser: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.route + 'users/register', registeringUser, {headers: this.headers});
  }
}
