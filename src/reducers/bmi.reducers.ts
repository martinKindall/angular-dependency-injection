import {BMIStore} from "../interfaces/BMIStore";
import {Action, createReducer, on} from "@ngrx/store";
import {updateBMI} from "../actions/bmi.actions";

export const initialBMI: BMIStore = {bmiResult: 0};

const myBMIReducer = createReducer(
  initialBMI,
  on(updateBMI, (state: BMIStore, props: BMIStore) => {
    return props;
  })
);

export function bmiReducer(state: BMIStore, action: Action): BMIStore {
  return myBMIReducer(state, action);
}
