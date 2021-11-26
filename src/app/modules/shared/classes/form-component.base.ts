import { FormControl, FormGroup } from "@angular/forms";

export abstract class FormComponentBase {

  public get valid(): boolean {
    return this.form.valid;
  }

  public get invalid(): boolean {
    return this.form.invalid;
  }

  public constructor(public readonly form: FormGroup) {
  }

  public getFormControl(formControlName: string): FormControl {
    return this.form.get(formControlName) as FormControl;
  }

  public getValue<TValue>(formControlName: string): TValue {
    return this.form.value[formControlName];
  }
}
