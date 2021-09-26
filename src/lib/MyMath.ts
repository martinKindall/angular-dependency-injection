import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyMath {

  divide(a: number, b: number): number {
    return a / b;
  }

  square(a: number): number {
    return a * a;
  }
}
