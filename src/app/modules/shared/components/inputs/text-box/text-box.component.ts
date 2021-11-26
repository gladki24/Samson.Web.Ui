import { Attribute, Component, Input } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent extends ReactiveInputBase<string> {
  @Input() public type: 'text' | 'password' = 'text';

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
