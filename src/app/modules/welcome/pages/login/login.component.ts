import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Login } from "../../../../actions/login.actions";
import { LoginNotificationService } from "../../services/login-notification.service";
import { WelcomeNavigatorService } from "../../services/navigator.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public readonly loginForm = this._formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: LoginNotificationService,
    private readonly _navigator: WelcomeNavigatorService
  ) {
  }

  public login(): void {
    this._store.dispatch(new Login.Login(this.loginForm.value)).subscribe(() => {
      this._notificationService.notifyUserLogged();
      this._navigator.home();
    });
  }
}
