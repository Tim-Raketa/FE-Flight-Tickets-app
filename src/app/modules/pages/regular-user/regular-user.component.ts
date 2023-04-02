import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightDTO } from '../../model/flightDTO';
import { FlightSearchDTO } from '../../model/flightSearchDTO';
import { FlightService } from '../../services/flight.service';
import { FormControl } from '@angular/forms';
import { newTicketDTO } from '../../model/newTickerDTO';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';


@Component({
  selector: 'app-regular-user',
  templateUrl: './regular-user.component.html',
  styleUrls: ['./regular-user.component.css']
})
export class RegularUserComponent implements OnInit {
  selected= 1;
  public datepicker:Date=new Date();

  public date:string="";
  public dataSource = new MatTableDataSource<FlightDTO>();
  public displayedColumns = ['dateTime', 'startingLocation', 'destination','pricePerPerson','totalPrice','buy'];
  public flights: FlightDTO[] = [];
  public search: FlightSearchDTO = new FlightSearchDTO();
  public ticket: newTicketDTO = new newTicketDTO();


  constructor(private flightService: FlightService, private router: Router, private authService: AuthService) { }

  ngOnInit():void {
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
  public buyTicket(flight:number){
    this.ticket.flightId=flight;
    this.ticket.numberOfPeople=this.selected;
    this.flightService.BuyTicket(this.ticket).subscribe(res =>{
      if(res) 
      {
      alert("You have succesfuly booked your ticket");
      this.dataSource.data=[];
      } else
      alert("Something went wrong during your booking");
    })
  }
  public UsersTickets(){
    this.router.navigate(['regularUser/tickets']);
  }
  logout() {
    this.authService.logout();
  }

}
