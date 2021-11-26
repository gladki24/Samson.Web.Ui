import { Attribute, Directive, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive()
export abstract class ReactiveInputBase<TValue> {
  @Input() public control: FormControl = new FormControl();

  public constructor(@Attribute('label') public readonly label?: string) {
  }
}
