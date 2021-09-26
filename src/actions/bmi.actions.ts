import {createAction, props} from '@ngrx/store';
import {BodyData} from "../interfaces/BodyData";
import {BMIResult} from "../interfaces/BMIResult";

export enum bmiActions {
  bmiCalculate = 'bmi calculate',
  bmiUpdate = 'bmi update'
}
export const calculateBMI = createAction(
  bmiActions.bmiCalculate,
  props<BodyData>()
);

export const updateBMI = createAction(
  bmiActions.bmiUpdate,
  props<BMIResult>()
);
