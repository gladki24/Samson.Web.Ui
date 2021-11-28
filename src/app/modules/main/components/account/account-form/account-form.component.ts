import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    }));
  }

  public updateAccount(): void {
  }
}
