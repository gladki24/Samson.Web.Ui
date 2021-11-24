import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { ExerciseMachineViewModel } from "../../models/exercise-machine/exercise-machine-view.model";
import { map } from "rxjs/operators";
import { CreateExerciseMachineRequest } from "../../models/exercise-machine/create-exercise-machine.request";
import { UpdateExerciseMachineRequest } from "../../models/exercise-machine/update-exercise-machine.request";
import { DeleteExerciseMachineRequest } from "../../models/exercise-machine/delete-exercise-machine.request";

@Injectable({
  providedIn: 'root'
})
export class ExerciseMachinesService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('exerciseMachines')
  }

  public get(exerciseMachineId: string): Observable<ExerciseMachineViewModel> {
    return this._apiService.get<ExerciseMachineViewModel>(this.getUrl(`getById/${exerciseMachineId}`)).pipe(
      map(info => new ExerciseMachineViewModel(info))
    )
  }

  public getAll(): Observable<ExerciseMachineViewModel[]> {
    return this._apiService.get<ExerciseMachineViewModel[]>(this.getUrl('getAll')).pipe(
      map(infos => infos.map(info => new ExerciseMachineViewModel(info)))
    )
  }

  public create(request: CreateExerciseMachineRequest): Observable<string> {
    return this._apiService.post<CreateExerciseMachineRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdateExerciseMachineRequest): Observable<void> {
    return this._apiService.post<UpdateExerciseMachineRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeleteExerciseMachineRequest): Observable<void> {
    return this._apiService.delete(this.getUrl('delete'), request);
  }
}
