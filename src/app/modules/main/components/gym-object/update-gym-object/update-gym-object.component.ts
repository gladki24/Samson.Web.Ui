import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { GymObjectViewModel } from "../../../../shared/models/gym-object/gym-object-view.model";
import { FormBuilder, Validators } from "@angular/forms";
import { MainNotificationService } from "../../../services/notification.service";
import { Store } from "@ngxs/store";
import { GymObject } from "../../../../shared/actions/gym-object.actions";
import { GymObjectState } from "../../../../shared/states/gym-object.state";
import { map } from "rxjs/operators";
import { UpdateGymObjectViewModel } from "../../../../shared/models/gym-object/payloads/update-gym-object-view.model";
import { CovidConfigurationRequest } from "../../../../shared/models/covid-configuration/covid-configuration.request";

@Component({
  selector: 'app-update-gym-object',
  templateUrl: './update-gym-object.component.html'
})
export class UpdateGymObjectComponent extends FormComponentBase {

  public gymObject?: GymObjectViewModel;

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      id: ['', Validators.required]
    }))
  }

  public loadData(): void {
    const id = this.getValue<string>('id');
    this._store.select(GymObjectState.gymObject).pipe(
      map(fn => fn(id))
    ).subscribe(gymObject => this.gymObject = gymObject)
  }

  public deleteGymObject(): void {
    this._store.dispatch(new GymObject.Delete({
      id: this.getValue('id')
    })).subscribe(() => {
      this._notificationService.notifyGymObjectDeleted();
    })
  }


  public updateGymObject(viewModel: UpdateGymObjectViewModel) {
    viewModel.id = this.gymObject?.id as string;
    viewModel.covidConfiguration = new CovidConfigurationRequest(
      viewModel.covidConfiguration.personFactorPerMeter, viewModel.covidConfiguration.isActive);
    this._store.dispatch(new GymObject.Update(viewModel)).subscribe(() => {
      this._notificationService.notifyGymObjectUpdated();
    })
  }
}
