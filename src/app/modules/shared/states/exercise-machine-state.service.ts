import { ExerciseMachineViewModel } from "../models/exercise-machine/exercise-machine-view.model";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ExerciseMachinesService } from "../services/api-service/exercise-machines.service";
import { ExerciseMachine } from "../actions/exercise-machine.actions";
import { flatMap } from "rxjs/operators";
import { ExerciseMachineRequestFactory } from "../utils/exercise-machine-request-factory";

class ExerciseMachinesViewModel {
  public machines: ExerciseMachineViewModel[] = [];
}

@Injectable({
  providedIn: 'root'
})
@State<ExerciseMachinesViewModel>({
  name: 'exerciseMachines'
})
export class ExerciseMachineState {
  public constructor(
    private readonly _apiService: ExerciseMachinesService
  ) {
  }

  @Selector()
  public static machine(state: ExerciseMachinesViewModel) {
    return (id: string) => {
      return state.machines.find(machine => machine.id === id)
    }
  }

  @Selector()
  public static allMachines(state: ExerciseMachinesViewModel) {
    return state.machines;
  }

  @Action(ExerciseMachine.GetAll)
  public getAll(ctx: StateContext<ExerciseMachinesViewModel>) {
    this._apiService.getAll().subscribe(machines => {
      ctx.patchState({
        machines
      })
    });
  }

  @Action(ExerciseMachine.Create)
  public create(ctx: StateContext<ExerciseMachinesViewModel>, {payload}: ExerciseMachine.Create) {
    const request = ExerciseMachineRequestFactory.getCreateExerciseMachine(payload.code,
      payload.name, payload.type, payload.localizationGymObjectId);

    return this._apiService.create(request).pipe(
      flatMap(() => ctx.dispatch(new ExerciseMachine.GetAll()))
    )
  }

  @Action(ExerciseMachine.Update)
  public update(ctx: StateContext<ExerciseMachinesViewModel>, {payload}: ExerciseMachine.Update) {
    const request = ExerciseMachineRequestFactory.getUpdateExerciseMachine(payload.id, payload.code,
      payload.name, payload.type, payload.localizationGymObjectId);

    return this._apiService.update(request).pipe(
      flatMap(() => ctx.dispatch(new ExerciseMachine.GetAll()))
    )
  }

  @Action(ExerciseMachine.Delete)
  public delete(ctx: StateContext<ExerciseMachinesViewModel>, {payload}: ExerciseMachine.Delete) {
    const request = ExerciseMachineRequestFactory.getDeleteExerciseMachine(payload.id);

    return this._apiService.delete(request).pipe(
      flatMap(() => ctx.dispatch(new ExerciseMachine.GetAll()))
    )
  }
}
