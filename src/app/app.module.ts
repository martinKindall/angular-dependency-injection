import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {bmiReducer} from "../reducers/bmi.reducers";
import {EffectsModule} from "@ngrx/effects";
import {BmiEffects} from "../effects/bmi.effects";
import {MyMath} from "../lib/MyMath";
import {AbstractMath} from "../logic/AbstractMath";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bmiState: bmiReducer
    }),
    EffectsModule.forRoot([BmiEffects])
  ],
  providers: [
    {provide: AbstractMath, useClass: MyMath}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
