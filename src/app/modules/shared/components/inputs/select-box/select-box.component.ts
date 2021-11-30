import { Attribute, Component, Input } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html'
})
export class SelectBoxComponent extends ReactiveInputBase<string> {

  @Input() public items: any[] = [];
  @Input() public displayExpr: string = '';
  @Input() public valueExpr: string = '';

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
