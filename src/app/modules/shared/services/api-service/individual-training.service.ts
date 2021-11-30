import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { IndividualTrainingViewModel } from "../../models/individual-training/individual-training-view.model";
import { map } from "rxjs/operators";
import { CreateIndividualTrainingRequest } from "../../models/individual-training/create-individual-training.request";
import { UpdateIndividualTrainingRequest } from "../../models/individual-training/update-individual-training.request";
import { CancelIndividualTrainingRequest } from "../../models/individual-training/cancel-individual-training.request";
import { EnrollIndividualTrainingRequest } from "../../models/individual-training/enroll-individual-training.request";
import { ConfirmIndividualTrainingRequest } from "../../models/individual-training/confirm-individual-training.request";

@Injectable({
  providedIn: 'root'
})
export class IndividualTrainingService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('IndividualTraining')
  }

  public get(individualTrainingId: string): Observable<IndividualTrainingViewModel> {
    return this._apiService.get<IndividualTrainingViewModel>(this.getUrl(`getById/${individualTrainingId}`))
      .pipe(
        map(info => new IndividualTrainingViewModel(info))
      )
  }

  public getAll(): Observable<IndividualTrainingViewModel[]> {
    return this._apiService.get<IndividualTrainingViewModel[]>(this.getUrl('getAll')).pipe(
      map(infos => infos.map(info => new IndividualTrainingViewModel(info)))
    )
  }

  public create(request: CreateIndividualTrainingRequest): Observable<string> {
    return this._apiService.post<CreateIndividualTrainingRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdateIndividualTrainingRequest): Observable<void> {
    return this._apiService.post<UpdateIndividualTrainingRequest, void>(this.getUrl('update'), request);
  }

  public cancel(request: CancelIndividualTrainingRequest): Observable<void> {
    return this._apiService.post<CancelIndividualTrainingRequest, void>(this.getUrl('cancel'), request);
  }

  public enroll(request: EnrollIndividualTrainingRequest): Observable<void> {
    return this._apiService.post<EnrollIndividualTrainingRequest, void>(this.getUrl('enroll'), request);
  }

  public confirm(request: ConfirmIndividualTrainingRequest): Observable<void> {
    return this._apiService.post<ConfirmIndividualTrainingRequest, void>(this.getUrl('confirm'), request);
  }
}
