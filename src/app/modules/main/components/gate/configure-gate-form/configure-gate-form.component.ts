import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-configure-gate-form',
  templateUrl: './configure-gate-form.component.html'
})
export class ConfigureGateFormComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      gymObject: [null, Validators.required]
    }));
  }

  public configure(): void {

  }
}
