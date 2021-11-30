import { MainComponentBase } from "../main-component.base";
import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { UpdateUserViewModel } from "../../../shared/models/user/update-user-view.model";
import { Observable } from "rxjs";
import { LoginState } from "../../../shared/states/login.state";
import { UserViewModel } from "../../../shared/models/user/user-view.model";
import { MainNotificationService } from "../../services/notification.service";
import { User } from "../../../shared/actions/user.actions";
import { DeleteUserViewModel } from "../../../shared/models/user/delete-user-view.model";
import { WelcomeNavigatorService } from "../../../welcome/services/navigator.service";
import { getRole } from "../../../shared/utils/role.utils";
import { Role } from "../../../shared/enums/role.enum";
import { ClientState } from "../../../shared/states/client.state";
import { PersonalTrainerState } from "../../../shared/states/personal-trainer.state";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends MainComponentBase {

  public readonly user$: Observable<UserViewModel>;

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService,
    private readonly _navigator: WelcomeNavigatorService
  ) {
    super('Konto', 'Zarządzaj swoimi danymi');
    const tokenData = this._store.selectSnapshot(LoginState.tokenData);
    const state = getRole(tokenData) === Role.Client ? ClientState.getUser : PersonalTrainerState.getUser;
    this.user$ = this._store.select(state);
  }

  public updateAccount(updateUserViewModel: UpdateUserViewModel): void {
    this._store.dispatch(new User.Update(updateUserViewModel))
      .subscribe(() => this._notificationService.notifyUserUpdated());
  }

  public deleteAccount(deleteViewModel: DeleteUserViewModel): void {
    this._store.dispatch(new User.Delete(deleteViewModel))
      .subscribe(() => {
        this._notificationService.notifyUserDeleted();
        this._navigator.login();
      });
  }
}
