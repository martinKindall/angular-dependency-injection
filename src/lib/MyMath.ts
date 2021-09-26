import {Injectable} from "@angular/core";
import {AbstractMath} from "../logic/AbstractMath";
import * as math from "mathjs";

@Injectable({
  providedIn: 'root'
})
export class MyMath implements AbstractMath {

  divide(a: number, b: number): number {
    return math.divide(a, b);
  }

  square(a: number): number {
    return math.square(a);
  }
}
