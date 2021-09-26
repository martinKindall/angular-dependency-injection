import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map} from "rxjs/operators";
import {BMI} from "../logic/BMI";
import {BodyData} from "../interfaces/BodyData";
import {EMPTY} from "rxjs";
import {bmiActions, updateBMI} from "../actions/bmi.actions";

@Injectable()
export class BmiEffects {
  constructor(
    private actions$: Actions,
    private bmiLogic: BMI
    ) {
  }

  calculateBMI$ = createEffect(() => this.actions$.pipe(
      ofType(bmiActions.bmiCalculate),
      map((bodyData: BodyData) => {
        const bmi = this.bmiLogic.calculate(bodyData);
        return updateBMI(bmi) as any;
      }),
      catchError(() => EMPTY)
    ));
}
