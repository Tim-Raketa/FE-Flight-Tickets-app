import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../../model/flight.model';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['begin', 'end', 'startingPlace', 'destination','maxSeats','freeSeats', 'seatPrice', 'delete'];
  public flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
   this.flightService.getFlights().subscribe(res =>{
    this.flights = res;
    this.dataSource.data = res;
   })
  }

  public addFlight() {

  }

  public deleteFlight(id: number){
    this.flightService.deleteFlight(id).subscribe(res =>{
      this.flightService.getFlights().subscribe(res =>{
        this.flights = res;
        this.dataSource.data = res;
       })
    })
  }

}
