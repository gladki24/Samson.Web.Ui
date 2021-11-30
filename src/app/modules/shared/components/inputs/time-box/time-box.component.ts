import { Attribute, Component } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: 'app-time-box',
  templateUrl: './time-box.component.html',
  styleUrls: ['./time-box.component.scss']
})
export class TimeBoxComponent extends ReactiveInputBase<Date> {

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
