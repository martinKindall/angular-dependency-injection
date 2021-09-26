import {createAction, props} from '@ngrx/store';
import {BodyData} from "../interfaces/BodyData";
import {BMIStore} from "../interfaces/BMIStore";

export const calculateBMI = createAction(
  'bmi calculate',
  props<BodyData>()
);

export const updateBMI = createAction(
  'bmi update',
  props<BMIStore>()
);
