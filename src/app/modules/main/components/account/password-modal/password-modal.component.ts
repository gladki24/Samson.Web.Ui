import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder,
    private readonly _dialogRef: MatDialogRef<PasswordModalComponent>
  ) {
    super(formBuilder.group(
      {
        password: ['', Validators.required]
      }
    ));
  }

  public delete(): void {
    this._dialogRef.close(this.getValue('password'));
  }

  public cancel(): void {
    this._dialogRef.close();
  }
}
