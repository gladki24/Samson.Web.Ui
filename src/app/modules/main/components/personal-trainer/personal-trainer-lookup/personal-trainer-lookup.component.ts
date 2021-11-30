import { Component, Input } from '@angular/core';
import { PersonalTrainerService } from "../../../../shared/services/api-service/personal-trainer.service";
import { Observable } from "rxjs";
import { PersonalTrainerViewModel } from "../../../../shared/models/personal-trainer/personal-trainer-view.model";

@Component({
  selector: 'app-personal-trainer-lookup',
  templateUrl: './personal-trainer-lookup.component.html'
})
export class PersonalTrainerLookupComponent {

  @Input()
  public get personalTrainerId(): string | undefined {
    return this._personalTrainerId
  }

  public set personalTrainerId(value: string | undefined) {
    this._personalTrainerId = value;
    this._initializePersonalTrainer$();
  }

  public get personalTrainer$(): Observable<PersonalTrainerViewModel> | undefined {
    return this._personalTrainer$;
  }

  private _personalTrainer$?: Observable<PersonalTrainerViewModel>;
  private _personalTrainerId?: string;

  public constructor(
    private readonly _personalTrainerService: PersonalTrainerService
  ) {
  }

  private _initializePersonalTrainer$(): void {
    if (this._personalTrainerId) {
      this._personalTrainer$ = this._personalTrainerService.get(this._personalTrainerId);
    }
  }
}
