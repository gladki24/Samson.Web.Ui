import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { IndividualTraining } from "../../../../shared/actions/individual-training.actions";
import { CreateIndividualTrainingViewModel } from "../../../../shared/models/individual-training/payloads/create-individual-training-view.model";
import { LoginState } from "../../../../shared/states/login.state";
import { MainNotificationService } from "../../../services/notification.service";
import { Moment } from "moment";
import * as moment from "moment";

@Component({
  selector: 'app-individual-training-form',
  templateUrl: './individual-training-form.component.html',
  styleUrls: ['./individual-training-form.component.scss']
})
export class IndividualTrainingFormComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      gymObjectId: ['', Validators.required],
      startDate: [Date.now(), Validators.required],
      endDate: [Date.now(), Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    }))
  }

  public addIndividualTraining(): void {
    const startDate = this.getValue<Moment>('startDate');
    const startTime = this.getValue<string>('startTime');

    const endDate = this.getValue<Moment>('endDate');
    const endTime = this.getValue<string>('endTime');

    const startDateTime = moment(startDate.toISOString().split('T').shift() + ' ' + startTime);
    const endDateTime = moment(endDate.toISOString().split('T').shift() + ' ' + endTime);

    const payload: CreateIndividualTrainingViewModel = {
      personalTrainerId: this._store.selectSnapshot(LoginState.tokenData).id,
      startDate: startDateTime.toDate(),
      endDate: endDateTime.toDate(),
      gymObjectId: this.getValue('gymObjectId')
    };

    this._store.dispatch(new IndividualTraining.Create(payload)).subscribe(() => {
      this._notificationService.notifyCreatedIndividualTraining();
    })
  }
}
