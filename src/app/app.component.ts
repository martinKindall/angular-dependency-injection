import { Component } from '@angular/core';
import {BMIStore} from "../interfaces/BMIStore";
import {Store} from "@ngrx/store";
import {calculateBMI} from "../actions/bmi.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weight?: number;
  height?: number;

  constructor(private store: Store<{bmiState: BMIStore}>) {
  }

  calculate() {
    this.store.dispatch(calculateBMI({weight: 1, height: 1}));
  }
}
