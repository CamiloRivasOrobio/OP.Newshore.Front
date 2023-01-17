import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { Journey } from 'src/app/models/journey';
import { Response } from 'src/app/models/response';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public loading: boolean = true;
  public journey: Journey;
  public flights: Flight[];
  public currency: any = (localStorage.getItem("currency") == null ? "USD" : localStorage.getItem("currency"));
  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    console.log(this.currency)
    this.flightsService.GetJourney({ Origin: 'MZL', Destination: 'BCN', Currency: 'COP' }).subscribe(
      (data: Response) => {
        this.journey = data.journey;
        this.flights = this.journey.flights;
        console.log(data.journey);
        this.loading = false;
      });
  }
}
