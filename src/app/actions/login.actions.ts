import { LoginViewModel } from "../modules/welcome/models/login-view.model";

export namespace Login {
  export class Login {
    static readonly type = '[Login] Login';

    public constructor(public payload: LoginViewModel) {
    }
  }

  export class Logout {
    static readonly type = '[Login] Logout';
  }
}
