import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';
import { FlightSearchDTO } from '../model/flightSearchDTO';
import { FlightDTO } from '../model/flightDTO';

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
  searchFlights(flightSearchDTO: FlightSearchDTO): Observable<FlightDTO[]> {
    return this.http.post<FlightDTO[]>(this.route + 'Flights/search',flightSearchDTO, {headers: this.headers});
  }
}
