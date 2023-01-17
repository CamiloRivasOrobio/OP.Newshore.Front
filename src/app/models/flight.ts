import { Transport } from "./transport";

export interface Flight {
    origin: string;
    destination: string;
    price: string;
    transport: Transport;
}
