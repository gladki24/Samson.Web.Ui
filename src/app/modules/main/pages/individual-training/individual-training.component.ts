import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";
import { Store } from "@ngxs/store";
import { IndividualTraining } from "../../../shared/actions/individual-training.actions";
import { LoginState } from "../../../shared/states/login.state";
import { MainNotificationService } from "../../services/notification.service";

@Component({
  selector: 'app-individual-training',
  templateUrl: './individual-training.component.html'
})
export class IndividualTrainingComponent extends MainComponentBase {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super('Treningi indywidualne', 'Zapisz się na treining z trenerem personalnym');
  }

  public onEnroll(trainingId: string): void {
    const clientId = this._store.selectSnapshot(LoginState.tokenData).id;

    this._store.dispatch(new IndividualTraining.Enroll({
      individualTrainingId: trainingId,
      clientId: clientId
    })).subscribe(() => this._notificationService.notifyTrainingEnroll())
  }

  public onCancel(trainingId: string): void {
    this._store.dispatch(new IndividualTraining.Cancel({
      individualTrainingId: trainingId
    })).subscribe(() => this._notificationService.notifyTrainingCancelled())
  }

  public onConfirm(trainingId: string): void {
    this._store.dispatch(new IndividualTraining.Confirm({
      individualTrainingId: trainingId
    })).subscribe(() => this._notificationService.notifyTraningConfirmed())
  }
}
