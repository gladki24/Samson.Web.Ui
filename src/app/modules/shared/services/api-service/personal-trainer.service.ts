import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { PersonalTrainerViewModel } from "../../models/personal-trainer/personal-trainer-view.model";
import { map } from "rxjs/operators";
import { CreatePersonalTrainerRequest } from "../../models/personal-trainer/create-personal-trainer.request";
import { UpdatePersonalTrainerRequest } from "../../models/personal-trainer/update-personal-trainer.request";
import { DeletePersonalTrainerRequest } from "../../models/personal-trainer/delete-personal-trainer.request";

@Injectable({
  providedIn: 'root'
})
export class PersonalTrainerService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('personalTrainer')
  }

  public get(personalTrainerId: string): Observable<PersonalTrainerViewModel> {
    return this._apiService.get<PersonalTrainerViewModel>(this.getUrl(personalTrainerId)).pipe(
      map(info => new PersonalTrainerViewModel(info))
    )
  }

  public create(request: CreatePersonalTrainerRequest): Observable<string> {
    return this._apiService.post<CreatePersonalTrainerRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdatePersonalTrainerRequest): Observable<void> {
    return this._apiService.post<UpdatePersonalTrainerRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeletePersonalTrainerRequest): Observable<void> {
    return this._apiService.delete<DeletePersonalTrainerRequest, void>(this.getUrl('delete'), request);
  }
}
