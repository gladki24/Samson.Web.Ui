import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Client } from "../../actions/client.actions";

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
    private readonly _store: Store
  ) {
  }

  public register(): void {
    this._store.dispatch(new Client.Register(this.registerForm.value))
  }
}
