import {createAction, props} from '@ngrx/store';
import {BodyData} from "../interfaces/BodyData";

export const calculateBMI = createAction(
  'bmi calculate',
  props<BodyData>()
);
