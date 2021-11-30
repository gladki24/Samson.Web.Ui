import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { CreatePersonalTrainerViewModel } from "../../../../shared/models/personal-trainer/create-personal-trainer-view.model";
import { PersonalTrainer } from "../../../../shared/actions/personal-trainer.actions";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-create-personal-trainer',
  templateUrl: './create-personal-trainer.component.html',
  styleUrls: ['./create-personal-trainer.component.scss']
})
export class CreatePersonalTrainerComponent {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) { }


  public createPersonalTrainer(viewModel: CreatePersonalTrainerViewModel): void {
    this._store.dispatch(new PersonalTrainer.Create(viewModel)).subscribe(() => {
      this._notificationService.notifyPersonalTrainerCreated();
    })
  }
}
