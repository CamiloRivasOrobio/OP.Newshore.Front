import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';
import { Journey } from '../models/journey';
import { Flights, Response } from '../models/response';
import { FlightsService } from './flights.service';

const journey: Response = {
  "succeeded": true,
  "message": "Consulta procesada exitosamente.",
  "erros": null,
  "journey": {
    "origin": "MZL",
    "destination": "BCN",
    "price": 700,
    "flights": [
    ]
  }
};
const flightsJourney: Flight[] = [
  {
    "origin": "MZL",
    "destination": "MDE",
    "price": 200,
    "transport": {
      "flightCarrier": "CO",
      "flightNumber": "8001"
    }
  },
  {
    "origin": "MDE",
    "destination": "BCN",
    "price": 500,
    "transport": {
      "flightCarrier": "CO",
      "flightNumber": "8004"
    }
  }
];
const flights: Flights[] = [
  {
    "departureStation": "MZL",
    "arrivalStation": "MDE",
    "flightCarrier": "CO",
    "flightNumber": "8001",
    "price": 200
  },
  {
    "departureStation": "MZL",
    "arrivalStation": "CTG",
    "flightCarrier": "CO",
    "flightNumber": "8002",
    "price": 200
  },
  {
    "departureStation": "PEI",
    "arrivalStation": "BOG",
    "flightCarrier": "CO",
    "flightNumber": "8003",
    "price": 200
  }];
const mockFlightsService: {
  GetJourney: (data: any) => Observable<Response>;
  GetAllFlights: () => Observable<Flights[]>;
} = {
  GetJourney: (data: any) => of(
    journey,
    journey.journey.origin = data.Origin,
    journey.journey.destination = data.Destination,
    journey.journey.flights = flightsJourney
      .filter(e => e.destination = data.Destination && e.origin == data.Origin),
  ),
  GetAllFlights: () => of(flights),
};
describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: FlightsService, useValue: mockFlightsService }]
    });
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have GetJourney function', () => {
    const service: FlightsService = TestBed.inject(FlightsService);
    expect(service.GetJourney).toBeTruthy();
  });

  it('should have GetAllFlights function', () => {
    const service: FlightsService = TestBed.inject(FlightsService);
    expect(service.GetAllFlights).toBeTruthy();
  });
});
