import {Injectable} from "@angular/core";
import {BodyData} from "../interfaces/BodyData";
import {BMIResult} from "../interfaces/BMIResult";
import {MyMath} from "../lib/MyMath";

@Injectable({
  providedIn: 'root'
})
export class BMI {

  constructor(private myMath: MyMath) {}

  calculate(bodyData: BodyData): BMIResult {
    return {
      bmiResult: this.myMath.divide(bodyData.weight, this.myMath.square(bodyData.height))
    };
  }
}
