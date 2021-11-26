import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-gate-form',
  templateUrl: './gate-form.component.html',
  styleUrls: ['./gate-form.component.scss']
})
export class GateFormComponent extends FormComponentBase {

  @Output() public userIdChange = new EventEmitter<string>();

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      user: ['', Validators.required]
    }))
  }

  public setUser(): void {
    this.userIdChange.emit(this.getValue('user'));
  }
}
