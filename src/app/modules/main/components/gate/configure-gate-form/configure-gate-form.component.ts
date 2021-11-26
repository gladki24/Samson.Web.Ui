import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { GateType } from "../../../enums/gate-type.enum";
import { GateConfigurationModel } from "../../../models/gate-configuration.model";

@Component({
  selector: 'app-configure-gate-form',
  templateUrl: './configure-gate-form.component.html'
})
export class ConfigureGateFormComponent extends FormComponentBase {

  @Output() public configurationChanged = new EventEmitter<GateConfigurationModel>();

  public readonly gateTypeItems: any = [
    {
      name: 'Wejściowa',
      value: GateType.Entry
    },
    {
      name: 'Wyjściowa',
      value: GateType.Exit
    }
  ]

  public constructor(
    formBuilder: FormBuilder
  ) {
    super(formBuilder.group({
      gymObject: [null, Validators.required],
      type: [null, Validators.required]
    }));
  }

  public configure(): void {
    const configuration = new GateConfigurationModel(
      this.form.value['gymObject'],
      this.form.value['type']
    )

    this.configurationChanged.emit(configuration);
  }
}
