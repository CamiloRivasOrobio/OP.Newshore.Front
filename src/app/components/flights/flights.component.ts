import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public currencyVa: string;
  public originVa: string;
  public destinationVa: string;
  public data: Response;
  public formFlight: any = FormGroup;
  constructor(private flightsService: FlightsService, public formBuilder: FormBuilder, public activedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.originVa = params['origin'];
      this.destinationVa = params['destination'];
      this.currencyVa = params['currency'];
    });
    this.formFlight = this.formBuilder.group({ currencyValue: this.currencyVa });
    this.GetJourney();
  }
  GetJourney(){
    this.flightsService.GetJourney({ Origin: this.originVa, Destination: this.destinationVa, Currency: this.currencyVa }).subscribe(
      (data: Response) => {
        this.data = data;
        this.journey = data.journey;
        this.flights = this.journey.flights;
        this.loading = false;
      });
  }
  ChangeCurrency() {
    console.log(this.formFlight.controls['currencyValue'].value);
    // this.GetJourney();
    this.router.navigate(['flight/' + this.originVa + '/' + this.destinationVa + '/' + this.formFlight.controls['currencyValue'].value]);
  }
}
