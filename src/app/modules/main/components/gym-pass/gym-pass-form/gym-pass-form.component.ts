import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { UpdateGymPassViewModel } from "../../../../shared/models/gym-pass/payloads/update-gym-pass-view.model";

@Component({
  selector: 'app-gym-pass-form',
  templateUrl: './gym-pass-form.component.html'
})
export class GymPassFormComponent extends FormComponentBase {

  @Output() public readonly update = new EventEmitter<UpdateGymPassViewModel>();

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public duration?: number;
  @Input() public price?: number;

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required]
    }))
  }

  public onSubmit(): void {
    this.update.next(this.form.value);
    if (!this.id) {
      this.form.reset();
    }
  }
}
