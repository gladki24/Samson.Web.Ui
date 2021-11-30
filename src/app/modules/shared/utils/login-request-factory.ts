import { LoginRequest } from "../models/token/login.request";

export namespace LoginRequestFactory {

  export const GetLoginRequest = (
    login: string,
    password: string
  ): LoginRequest => new LoginRequest(login, password);

}
