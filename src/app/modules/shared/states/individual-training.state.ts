import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IndividualTrainingViewModel } from "../models/individual-training/individual-training-view.model";
import { IndividualTraining } from "../actions/individual-training.actions";
import { IndividualTrainingService } from "../services/api-service/individual-training.service";
import { IndividualTrainingRequestFactory } from "../utils/individual-training-request-factory";
import { flatMap } from "rxjs/operators";
import { Injectable } from "@angular/core";

class IndividualTrainingsViewModel {
  public trainings: IndividualTrainingViewModel[] = [];
}

@Injectable({
  providedIn: 'root'
})
@State<IndividualTrainingsViewModel>({
  name: 'individuaTraining',
  defaults: {
    trainings: []
  }
})
export class IndividualTrainingState {

  public constructor(
    private readonly _apiService: IndividualTrainingService
  ) {
  }

  @Selector()
  public static getAllTrainings(state: IndividualTrainingsViewModel) {
    return state.trainings;
  }

  @Selector()
  public static clientTrainings(state: IndividualTrainingsViewModel) {
    return (clientId: string) => {
      return state.trainings.filter(training => training.clientId === clientId);
    }
  }


  @Selector()
  public static personalTrainerTrainings(state: IndividualTrainingsViewModel) {
    return (personalTrainerId: string) => {
      return state.trainings.filter(training => training.personalTrainerId === personalTrainerId);
    }
  }

  @Action(IndividualTraining.GetAll)
  public getAll(ctx: StateContext<IndividualTrainingsViewModel>) {
    this._apiService.getAll().subscribe(trainings => {
      ctx.patchState({
        trainings
      });
    })
  }

  @Action(IndividualTraining.Create)
  public create(ctx: StateContext<IndividualTrainingsViewModel>, {payload}: IndividualTraining.Create) {
    const request = IndividualTrainingRequestFactory.GetCreateIndividualTrainingRequest(
      payload.personalTrainerId, payload.gymObjectId, payload.startDate, payload.endDate, payload.clientId
    )
    return this._apiService.create(request).pipe(
      flatMap(() => ctx.dispatch(new IndividualTraining.GetAll()))
    )
  }

  @Action(IndividualTraining.Update)
  public update(ctx: StateContext<IndividualTrainingsViewModel>, {payload}: IndividualTraining.Update) {
    const request = IndividualTrainingRequestFactory.GetUpdateIndividualTrainingRequest(
      payload.individualTrainingId, payload.gymObjectId, payload.startDate, payload.endDate
    )

    return this._apiService.update(request).pipe(
      flatMap(() => ctx.dispatch(new IndividualTraining.GetAll()))
    )
  }

  @Action(IndividualTraining.Cancel)
  public cancel(ctx: StateContext<IndividualTrainingsViewModel>, {payload}: IndividualTraining.Cancel) {
    const request = IndividualTrainingRequestFactory.GetCancelIndividualTrainingRequest(payload.individualTrainingId);

    return this._apiService.cancel(request).pipe(
      flatMap(() => ctx.dispatch(new IndividualTraining.GetAll()))
    )
  }

  @Action(IndividualTraining.Enroll)
  public enroll(ctx: StateContext<IndividualTrainingsViewModel>, {payload}: IndividualTraining.Enroll) {
    const request = IndividualTrainingRequestFactory
      .GetEnrollIndividualTrainingRequest(payload.individualTrainingId, payload.clientId);

    return this._apiService.enroll(request).pipe(
      flatMap(() => ctx.dispatch(new IndividualTraining.GetAll()))
    )

  }

  @Action(IndividualTraining.Confirm)
  public confirm(ctx: StateContext<IndividualTrainingsViewModel>, {payload}: IndividualTraining.Confirm) {
    const request = IndividualTrainingRequestFactory.GetConfirmIndividualTrainingRequest(payload.individualTrainingId);

    return this._apiService.confirm(request).pipe(
      flatMap(() => ctx.dispatch(new IndividualTraining.GetAll()))
    );
  }

}
