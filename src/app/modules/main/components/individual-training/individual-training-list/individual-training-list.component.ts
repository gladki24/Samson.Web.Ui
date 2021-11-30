import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IndividualTrainingViewModel } from "../../../../shared/models/individual-training/individual-training-view.model";
import { Store } from "@ngxs/store";
import { IndividualTraining } from "../../../../shared/actions/individual-training.actions";
import { IndividualTrainingState } from "../../../../shared/states/individual-training.state";
import { map } from "rxjs/operators";
import { LoginState } from "../../../../shared/states/login.state";

@Component({
  selector: 'app-individual-training-list',
  templateUrl: './individual-training-list.component.html'
})
export class IndividualTrainingListComponent implements AfterViewInit {

  @Input() public type: 'client' | 'all' | 'trainer' = 'all';
  @Output() public enroll = new EventEmitter<string>();
  @Output() public cancel = new EventEmitter<string>();
  @Output() public confirm = new EventEmitter<string>();

  public readonly displayedColumns: string[] = [
    'actions', 'place', 'trainer', 'startDate', 'endDate', 'status'
  ];

  public individualTrainings: IndividualTrainingViewModel[] = [];

  public constructor(
    private readonly _store: Store
  ) {
    this._store.dispatch(new IndividualTraining.GetAll());
  }

  public ngAfterViewInit(): void {
    this._updateList();
  }

  private _updateList(): void {
    const userId = this._store.selectSnapshot(LoginState.tokenData).id;

    if (this.type === 'trainer') {
      this._store.select(IndividualTrainingState.personalTrainerTrainings).pipe(
        map(filterFn => filterFn(userId))
      ).subscribe(trainings => this.individualTrainings = trainings)
    }

    else if (this.type === 'client') {
      this._store.select(IndividualTrainingState.clientTrainings).pipe(
        map(filterFn => filterFn(userId))
      ).subscribe(trainings => this.individualTrainings = trainings)
    }

    else if (this.type === 'all') {
      this._store.select(IndividualTrainingState.getAllTrainings)
        .subscribe(trainings => this.individualTrainings = trainings)
    }
  }
}
