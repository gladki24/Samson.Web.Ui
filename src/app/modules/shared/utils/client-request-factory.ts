import { RegisterClientRequest } from "../models/client/register-client.request";

export namespace ClientRequestFactory {

  export const GetRegisterClientRequest = (
    name: string,
    surname: string,
    login: string,
    password: string
  ): RegisterClientRequest =>
    new RegisterClientRequest(name, surname, login, password);


}
