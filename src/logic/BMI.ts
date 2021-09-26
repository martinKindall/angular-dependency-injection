import {Injectable} from "@angular/core";
import {BodyData} from "../interfaces/BodyData";
import {BMIResult} from "../interfaces/BMIResult";

@Injectable({
  providedIn: 'root'
})
export class BMI {

  calculate(bodyData: BodyData): BMIResult {
    return {
      bmiResult: bodyData.weight / Math.pow(bodyData.height, 2)
    };
  }
}
