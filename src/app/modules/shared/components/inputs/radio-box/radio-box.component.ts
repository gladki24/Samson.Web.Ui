import { Attribute, Component, Input } from '@angular/core';
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.scss']
})
export class RadioBoxComponent extends ReactiveInputBase<any> {

  @Input() public items: any[] = [];
  @Input() public displayExpr: string = '';
  @Input() public valueExpr: string = '';

  public constructor(
    @Attribute('label') label: string
  ) {
    super(label);
  }
}
