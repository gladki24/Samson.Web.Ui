import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { CreatePersonalTrainerViewModel } from "../../../../shared/models/personal-trainer/create-personal-trainer-view.model";

@Component({
  selector: 'app-personal-trainer-form',
  templateUrl: './personal-trainer-form.component.html'
})
export class PersonalTrainerFormComponent extends FormComponentBase {

  @Output() public create = new EventEmitter<CreatePersonalTrainerViewModel>();

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required]
    }));
  }

  public onSubmit(): void {
    this.create.next(this.form.value);
  }

}
