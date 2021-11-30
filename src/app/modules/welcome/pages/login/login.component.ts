import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Login } from "../../../shared/actions/login.actions";
import { LoginNotificationService } from "../../services/login-notification.service";
import { WelcomeNavigatorService } from "../../services/navigator.service";
import { FormComponentBase } from "../../../shared/classes/form-component.base";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: LoginNotificationService,
    private readonly _navigator: WelcomeNavigatorService
  ) {
    super(formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    }));
  }

  public login(): void {
    this._store.dispatch(new Login.Login(this.form.value)).subscribe(() => {
      this._notificationService.notifyUserLogged();
      this._navigator.home();
    });
  }
}
