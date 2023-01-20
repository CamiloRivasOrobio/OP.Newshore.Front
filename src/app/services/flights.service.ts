import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flights, Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  public GetJourney(data?: any): Observable<Response> {
<<<<<<< HEAD
    return this.http.get<Response>(environment.urlApi + 'v1/Flight?Origin=' + data?.Origin + '&Destination=' + data?.Destination + '&Currency=' +
      data?.Currency);
=======
    return this.http.get<Response>(environment.urlApi + 'v1/Flight?Origin=' + data?.Origin + '&Destination=' + data?.Destination + '&Currency=' + data?.Currency);
>>>>>>> c63ae3471e56af1576a295b5418b6560eedb573c
  }
  public GetAllFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(environment.urlApiNewshore);
  }
}