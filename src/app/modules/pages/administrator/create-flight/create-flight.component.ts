import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/modules/model/flight.model';
import { FlightService } from 'src/app/modules/services/flight.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  createFlightForm = new FormGroup({
    startingPlace: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    destination: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    maxSeats:  new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    seatPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')])
  })

  constructor(private router: Router, private flightService: FlightService) { }

  get startingPlace(){
    return this.createFlightForm.get('startingPlace');
  }

  get destination(){
    return this.createFlightForm.get('destination');
  }

  get maxSeats(){
    return this.createFlightForm.get('maxSeats');
  }

  get seatPrice(){
    return this.createFlightForm.get('seatPrice');
  }

  ngOnInit(): void {
  }

  goBack =  () => {
    this.router.navigateByUrl('/administrator');
  };

  createFlight =  () => {
    let begin = new Date("2023-04-02T10:15:30");
    let end = new Date("2023-04-02T13:15:30");

    let startingPlace = this.createFlightForm.get("startingPlace")?.value
    let destination = this.createFlightForm.get("destination")?.value
    let maxSeats = this.createFlightForm.get("maxSeats")?.value
    let seatPrice = this.createFlightForm.get("seatPrice")?.value

    let flight: Flight = {
      id: 0,
      begin: begin,
      end: end,
      startingPlace: startingPlace ? startingPlace : '',
      destination: destination ? destination : '',
      maxSeats: Number(maxSeats),
      freeSeats: Number(maxSeats),
      seatPrice: Number(seatPrice),
    }

    console.log(flight);

    this.flightService.createFlight(flight).subscribe(res =>{
      console.log(res);
    }, error => 
    {
      console.log(error)
    }
    );

    this.router.navigateByUrl('/administrator');

  };

}
