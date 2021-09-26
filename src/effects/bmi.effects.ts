import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tap} from "rxjs/operators";

@Injectable()
export class BmiEffects {
  constructor(private actions$: Actions) {
  }

  calculateBMI$ = this.actions$.pipe(
    ofType('bmi calculate'),
    tap((action) => {
      console.log(action);
    })
  ).subscribe();
}
