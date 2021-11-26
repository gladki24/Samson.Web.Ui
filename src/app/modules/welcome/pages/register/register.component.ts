import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Client } from "../../../../actions/client.actions";
import { tap } from "rxjs/operators";
import { WelcomeNavigatorService } from "../../services/navigator.service";
import { RegistrationNotificationService } from "../../services/registration-notification.service";
import { FormComponentBase } from "../../../shared/classes/form-component.base";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormComponentBase {
  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _navigator: WelcomeNavigatorService,
    private readonly _notificationService: RegistrationNotificationService
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required]
    }))
  }

  public register(): void {
    this._store.dispatch(new Client.Register(this.form.value)).pipe(
      tap(() => this._notificationService.notifyAccountRegistered()),
      tap(() => this.form.reset()),
      tap(() => this._navigator.login()),
    ).subscribe();
  }
}
