import {Injectable} from "@angular/core";
import {BodyData} from "../interfaces/BodyData";
import {BMIResult} from "../interfaces/BMIResult";
import {AbstractMath} from "./AbstractMath";

@Injectable({
  providedIn: 'root'
})
export class BMI {

  constructor(private math: AbstractMath) {}

  calculate(bodyData: BodyData): BMIResult {
    return {
      bmiResult: this.math.divide(bodyData.weight, this.math.square(bodyData.height))
    };
  }
}
