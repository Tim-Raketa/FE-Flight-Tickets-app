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
    beginDate: new FormControl('', Validators.required),
    beginTime: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    startingPlace: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    destination: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    maxSeats:  new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    seatPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')])
  })

  error:any={isError:false,errorMessage:''};
  isValidDate:any;

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

  get beginDate(){
    return this.createFlightForm.get('beginDate');
  }

  get beginTime(){
    return this.createFlightForm.get('beginTime');
  }

  get endDate(){
    return this.createFlightForm.get('endDate');
  }

  get endTime(){
    return this.createFlightForm.get('endTime');
  }

  ngOnInit(): void {
  }

  goBack =  () => {
    this.router.navigateByUrl('/administrator');
  };

  createFlight =  () => {
    
    let beginDate = this.createFlightForm.get("beginDate")?.value
    let beginTime = this.createFlightForm.get("beginTime")?.value
    console.log(beginDate)
    console.log(typeof(beginDate))
    console.log(beginTime)
    console.log(typeof(beginTime))
    let begin = new Date(beginDate + "T" + beginTime + ":00");
    begin.setHours(begin.getHours() + 2);

    let endDate = this.createFlightForm.get("endDate")?.value
    let endTime = this.createFlightForm.get("endTime")?.value
    console.log(endDate)
    console.log(endTime)
    let end = new Date(endDate + "T" + endTime + ":00");
    end.setHours(end.getHours() + 2);

    this.isValidDate = this.validateDates(begin, end);

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

    if(this.isValidDate){
      this.flightService.createFlight(flight).subscribe(res =>{
        console.log(res);
        this.router.navigateByUrl('/administrator');
      }, error => 
      {
        console.log(error)
      }
      );
  
    }
    
  };

  validateDates(sDate: Date, eDate: Date){
    this.isValidDate = true;
  
    if((sDate != null && eDate !=null) && (eDate) <= (sDate)){
      this.error={isError:true,errorMessage:'End date should be greater then start date!'};
      this.isValidDate = false;
    }

    let today = new Date();
    if((sDate <= today) && (eDate <= today)){
      this.error={isError:true,errorMessage:'Cannot create flight in past!'};
      this.isValidDate = false;
    }

    return this.isValidDate;
  }

}
