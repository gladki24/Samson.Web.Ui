import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Client } from "../actions/client.actions";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { flatMap } from "rxjs/internal/operators";
import { Injectable } from "@angular/core";
import { PersonalTrainerViewModel } from "../models/personal-trainer/personal-trainer-view.model";
import { PersonalTrainerService } from "../services/api-service/personal-trainer.service";
import { PersonalTrainerRequestFactory } from "../utils/personal-trainer-request-factory";
import { PersonalTrainer } from "../actions/personal-trainer.actions";


@State<PersonalTrainerViewModel>({
  name: 'client'
})
@Injectable()
export class PersonalTrainerState {

  public constructor(private readonly _apiService: PersonalTrainerService) { }

  @Selector()
  public static getPersonalTrainer(state: PersonalTrainerViewModel) {
    return state;
  }

  @Action(PersonalTrainer.Get)
  public getPersonalTrainer({getState, patchState}: StateContext<PersonalTrainerViewModel>, { payload }: Client.Get) {
    return this._apiService.get(payload).pipe(
      tap(result => patchState({
        id: result.id,
        name: result.name,
        surname: result.surname,
        login: result.login
      }))
    )
  }

  @Action(PersonalTrainer.Create)
  public createPersonalTrainer({getState, patchState, dispatch}: StateContext<PersonalTrainerViewModel>, { payload }: Client.Register): Observable<void> {
    const request = PersonalTrainerRequestFactory.GetCreatePersonalTrainerRequest(
      payload.name, payload.surname, payload.login, payload.password);


    return this._apiService.create(request).pipe(
      flatMap(id => dispatch(new PersonalTrainer.Get(id)))
    );
  }

  @Action(PersonalTrainer.Update)
  public updatePersonalTrainer({patchState, dispatch}: StateContext<PersonalTrainerViewModel>, { payload }: Client.Update): Observable<void> {
    const request = PersonalTrainerRequestFactory.GetPersonalTrainerUpdateRequest(payload.id, payload.name, payload.surname);

    return this._apiService.update(request).pipe(
      flatMap(() => dispatch(new Client.Get(payload.id)))
    );
  }

  @Action(PersonalTrainer.Delete)
  public deletePersonalTrainer({patchState, dispatch}: StateContext<PersonalTrainerViewModel>, { payload }: Client.Delete): Observable<void> {
    const request = PersonalTrainerRequestFactory.GetPersonalTrainerDeleteRequest(payload.id, payload.password);

    return this._apiService.delete(request).pipe(
      flatMap(() => dispatch(new Client.Get(payload.id)))
    )
  }
}
