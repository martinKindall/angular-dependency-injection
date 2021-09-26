import { Component } from '@angular/core';
import {BMIResult} from "../interfaces/BMIResult";
import {Store} from "@ngrx/store";
import {calculateBMI} from "../actions/bmi.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weight?: string;
  height?: string;
  bmiResult$: Observable<number>;

  constructor(private store: Store<{bmiState: BMIResult}>) {
    this.bmiResult$ = store.select(({bmiState}) => {
      return bmiState.bmiResult;
    });
  }

  calculate() {
    this.store.dispatch(calculateBMI({
      weight: parseFloat(this.weight),
      height: parseFloat(this.height) / 100.0
    }));
  }
}
