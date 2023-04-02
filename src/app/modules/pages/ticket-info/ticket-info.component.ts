import { Component, OnInit } from '@angular/core';
import { TicketDTO } from '../../model/ticketDTO';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from '../../services/flight.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  constructor(private flightService: FlightService, private authService: AuthService) { }
  public dataSource = new MatTableDataSource<TicketDTO>();
  public displayedColumns = ['startDate', 'startingLocation', 'destination','numberOfPeople'];
  public tickets: TicketDTO[] = [];


  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
