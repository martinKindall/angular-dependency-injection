import {createAction, props} from '@ngrx/store';
import {BodyData} from "../interfaces/BodyData";
import {BMIResult} from "../interfaces/BMIResult";

export const calculateBMI = createAction(
  'bmi calculate',
  props<BodyData>()
);

export const updateBMI = createAction(
  'bmi update',
  props<BMIResult>()
);
