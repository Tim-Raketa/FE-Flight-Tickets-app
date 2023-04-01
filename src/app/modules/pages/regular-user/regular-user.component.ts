import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightDTO } from '../../model/flightDTO';
import { FlightSearchDTO } from '../../model/flightSearchDTO';
import { FlightService } from '../../services/flight.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-regular-user',
  templateUrl: './regular-user.component.html',
  styleUrls: ['./regular-user.component.css']
})
export class RegularUserComponent implements OnInit {
  selected= 1;
  public datepicker:Date=new Date();

  date = new FormControl(new Date());

  public dataSource = new MatTableDataSource<FlightDTO>();
  public displayedColumns = ['dateTime', 'startingLocation', 'destination','pricePerPerson','totalPrice','buy'];
  public flights: FlightDTO[] = [];
  public search: FlightSearchDTO = new FlightSearchDTO();


  constructor(private flightService: FlightService) { }

  ngOnInit():void {
    this.search.date=new Date().toISOString();
    this.search.startingLocation="";
    this.search.numberOfPeople=0;
    this.selected=1;
  }
  public buyTicket(id: number){

  }
  public searchFlights(form: FlightSearchDTO){
    let a=this.date.value as Date;
    a.setHours(a.getHours() +3)
    this.search.date=a.toISOString();
    this.search.numberOfPeople=this.selected;
    this.flightService.searchFlights(this.search).subscribe(res =>{
      this.flights = res;
      this.dataSource.data = res;
     })
  }
}
