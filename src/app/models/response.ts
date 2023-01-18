import { Journey } from "./journey";

export interface Response {
    succeeded: boolean;
    message: string;
    erros: any;
    journey: Journey;
}
export interface Flights {
    departureStation: string;
    arrivalStation: string;
    flightCarrier: string;
    flightNumber: string;
    price: number;
}