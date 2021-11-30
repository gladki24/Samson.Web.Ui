import { Attribute, Component } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pl-PL'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class DateBoxComponent extends ReactiveInputBase<Date> {

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
