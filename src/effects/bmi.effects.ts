import {Injectable} from "@angular/core";
import {Actions, ofType} from "@ngrx/effects";
import {map, tap} from "rxjs/operators";
import {BMI} from "../logic/BMI";
import {BodyData} from "../interfaces/BodyData";

@Injectable()
export class BmiEffects {
  constructor(
    private actions$: Actions,
    private bmiLogic: BMI
    ) {
  }

  calculateBMI$ = this.actions$.pipe(
    ofType('bmi calculate'),
    map((bodyData: BodyData) => {
      const bmi = this.bmiLogic.calculate(bodyData);
      return {
        type: 'bmi update',
        ...bmi
      };
    })
  ).subscribe();
}
