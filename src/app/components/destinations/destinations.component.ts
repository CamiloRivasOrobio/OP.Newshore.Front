import { Component, OnInit } from '@angular/core';
import { Response, Flights } from 'src/app/models/response';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  public loading: boolean = true;
  public flights: Flights[];
  public data: Response;
  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.GetAllFlights().subscribe(
      (data: Flights[]) => {
        this.flights = data;
        this.loading = false;
      });
  }
}
