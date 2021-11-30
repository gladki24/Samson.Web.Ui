import { Attribute, Directive, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive()
export abstract class ReactiveInputBase<TValue> {
  @Input() public control: FormControl = new FormControl();
  @Input() public disabled: boolean = false;
  @Input() public readOnly: boolean = false;
  @Input() public value?: TValue;

  public constructor(@Attribute('label') public readonly label?: string) {
  }
}
