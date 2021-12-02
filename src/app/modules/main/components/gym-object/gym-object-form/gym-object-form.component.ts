import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { UpdateGymObjectViewModel } from "../../../../shared/models/gym-object/payloads/update-gym-object-view.model";
import { FormBuilder, Validators } from "@angular/forms";
import { CovidConfigurationRequest } from "../../../../shared/models/covid-configuration/covid-configuration.request";

@Component({
  selector: 'app-gym-object-form',
  templateUrl: './gym-object-form.component.html'
})
export class GymObjectFormComponent extends FormComponentBase {

  @Output() public readonly update = new EventEmitter<UpdateGymObjectViewModel>();

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public personPerMeter?: number;
  @Input() public isActive?: boolean;

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      personPerMeter: [5]
    }));
  }

  public onSubmit(): void {

    const form: UpdateGymObjectViewModel  = {
      id: this.id as string,
      covidConfiguration: new CovidConfigurationRequest(
        this.getValue('personPerMeter'), true),
      name: this.getValue('name')
    }

    this.update.next(form);

    if (!this.id) {
      this.form.reset();
    }
  }
}
