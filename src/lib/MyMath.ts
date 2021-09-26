import {Injectable} from "@angular/core";
import {AbstractMath} from "../logic/AbstractMath";

@Injectable({
  providedIn: 'root'
})
export class MyMath implements AbstractMath {

  divide(a: number, b: number): number {
    return a / b;
  }

  square(a: number): number {
    return a * a;
  }
}
