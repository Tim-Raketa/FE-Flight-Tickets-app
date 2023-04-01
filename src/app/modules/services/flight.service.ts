import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  route: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.route + 'Flights/getAll', {headers: this.headers});
  }

  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.route + 'Flights/delete/' + id, {headers: this.headers});
  }

  /*
  submit(registeringUser: UserDTO): Observable<Boolean> {
    return this.http.post<Boolean>(this.route + 'users/register', registeringUser, {headers: this.headers});
  }
  */

  createFlight(flight: Flight): Observable<String> {
    return this.http.post<String>(this.route + 'Flights/addFlight', flight, {headers: this.headers});
  }
}
