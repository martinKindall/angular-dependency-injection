import {BMIResult} from "../interfaces/BMIResult";
import {Action, createReducer, on} from "@ngrx/store";
import {updateBMI} from "../actions/bmi.actions";

export const initialBMI: BMIResult = {bmiResult: 0};

const myBMIReducer = createReducer(
  initialBMI,
  on(updateBMI, (state: BMIResult, props: BMIResult) => {
    return props;
  })
);

export function bmiReducer(state: BMIResult, action: Action): BMIResult {
  return myBMIReducer(state, action);
}
