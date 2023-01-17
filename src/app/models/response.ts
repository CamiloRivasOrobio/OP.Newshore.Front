import { Journey } from "./journey";

export interface Response {
    succeeded: boolean;
    message: string;
    erros: any;
    journey: Journey;
}
