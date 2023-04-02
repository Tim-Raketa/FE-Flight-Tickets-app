import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FlightDTO } from '../../model/flightDTO';
import { FlightSearchDTO } from '../../model/flightSearchDTO';
import { newTicketDTO } from '../../model/newTickerDTO';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected= 1;
  public datepicker:Date=new Date();

  public date:string="";
  public dataSource = new MatTableDataSource<FlightDTO>();
  public displayedColumns = ['dateTime', 'startingLocation', 'destination','pricePerPerson','totalPrice'];
  public flights: FlightDTO[] = [];
  public search: FlightSearchDTO = new FlightSearchDTO();
  public ticket: newTicketDTO = new newTicketDTO();
  
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.search.date=new Date().toISOString();
    this.search.startingLocation="";
    this.search.numberOfPeople=0;
    this.selected=1;
  }

  public searchFlights(form: FlightSearchDTO){
    let a = new Date(this.date);
    a.setHours(a.getHours() +3)
    this.search.date=a.toISOString();
    this.search.numberOfPeople=this.selected;
    this.flightService.searchFlights(this.search).subscribe(res =>{
      this.flights = res;
      this.dataSource.data = res;
     })
  }

  goToLogin =  () => {
    this.router.navigateByUrl('/login');
  };

  goToRegistration =  () => {
    this.router.navigateByUrl('/registration');
  };


}
