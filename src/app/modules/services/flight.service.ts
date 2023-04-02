import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';
import { FlightSearchDTO } from '../model/flightSearchDTO';
import { FlightDTO } from '../model/flightDTO';
import { newTicketDTO } from '../model/newTickerDTO';
import { TicketDTO } from '../model/ticketDTO';

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
  BuyTicket(NewTickerDTO: newTicketDTO): Observable<boolean> {
    return this.http.post<boolean>(this.route + 'Tickets/buy/ticket',NewTickerDTO, {headers: this.headers});
  }

  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.route + 'Flights/delete/' + id, {headers: this.headers});
  }

  createFlight(flight: Flight): Observable<String> {
    return this.http.post<String>(this.route + 'Flights/addFlight', flight, {headers: this.headers});

  }
  getTicket(): Observable<TicketDTO[]> {
    return this.http.get<TicketDTO[]>(this.route + 'Tickets/user', {headers: this.headers});
  }
}
