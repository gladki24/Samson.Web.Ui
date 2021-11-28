import { FormControl, FormGroup } from "@angular/forms";
import { Directive, OnChanges, SimpleChanges } from "@angular/core";

@Directive()
export abstract class FormComponentBase implements OnChanges {

  public get valid(): boolean {
    return this.form.valid;
  }

  public get invalid(): boolean {
    return this.form.invalid;
  }

  public constructor(public readonly form: FormGroup) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    Object.keys(changes).forEach(key => {
      if (this.form.contains(key)) {
        this.form.controls[key].setValue(changes[key].currentValue);
      }
    })
  }

  public getFormControl(formControlName: string): FormControl {
    return this.form.get(formControlName) as FormControl;
  }

  public getValue<TValue>(formControlName: string): TValue {
    return this.form.value[formControlName];
  }
}
