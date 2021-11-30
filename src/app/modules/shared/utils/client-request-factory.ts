import { RegisterClientRequest } from "../models/client/register-client.request";
import { UpdateClientRequest } from "../models/client/update-client.request";
import { DeleteClientRequest } from "../models/client/delete-client.request";
import { ExtendClientPassRequest } from "../models/client/extend-client-pass.request";

export namespace ClientRequestFactory {

  export const GetRegisterClientRequest = (
    name: string,
    surname: string,
    login: string,
    password: string
  ): RegisterClientRequest =>
    new RegisterClientRequest(name, surname, login, password);

  export const GetUpdateClientRequest = (
    id: string,
    name: string,
    surname: string
  ): UpdateClientRequest =>
    new UpdateClientRequest(id, name, surname);

  export const GetDeleteClientRequest = (
    id: string,
    password: string
  ): DeleteClientRequest =>
    new DeleteClientRequest(id, password);

  export const GetExtendGymPassRequest = (
    clientId: string,
    gymPassId: string
  ): ExtendClientPassRequest => new ExtendClientPassRequest(clientId, gymPassId)
}
