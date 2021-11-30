import { Attribute, Component, Input } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent extends ReactiveInputBase<string | number> {
  @Input() public type: 'text' | 'number' | 'password' = 'text';
  @Input() public min?: number;
  @Input() public max?: number;

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
