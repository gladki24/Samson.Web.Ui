import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Client } from "../../actions/client.actions";
import { tap } from "rxjs/operators";
import { WelcomeNavigatorService } from "../../services/navigator.service";
import { RegistrationNotificationService } from "../../services/registration-notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public readonly registerForm = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _navigator: WelcomeNavigatorService,
    private readonly _notificationService: RegistrationNotificationService
  ) {
  }

  public register(): void {
    this._store.dispatch(new Client.Register(this.registerForm.value)).pipe(
      tap(() => this._notificationService.notifyAccountRegistered()),
      tap(() => this.registerForm.reset()),
      tap(() => this._navigator.login()),
    ).subscribe();
  }
}
