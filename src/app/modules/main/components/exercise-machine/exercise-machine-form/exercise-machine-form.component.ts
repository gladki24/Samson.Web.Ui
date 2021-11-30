import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { ExerciseMachineType } from "../../../../shared/enums/exercise-machine-type.enum";
import { UpdateExerciseMachineViewModel } from "../../../../shared/models/exercise-machine/payloads/update-exercise-machine-view.model";

@Component({
  selector: 'app-exercise-machine-form',
  templateUrl: './exercise-machine-form.component.html'
})
export class ExerciseMachineFormComponent extends FormComponentBase {

  @Output() public readonly update = new EventEmitter<UpdateExerciseMachineViewModel>();

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public code?: string;
  @Input() public type?: ExerciseMachineType;
  @Input() public localizationGymObjectId?: string;

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      localizationGymObjectId: ['', Validators.required]
    }))
  }

  public onSubmit(): void {
    this.update.next(this.form.value);
    if (!this.id) {
      this.form.reset();
    }
  }
}
