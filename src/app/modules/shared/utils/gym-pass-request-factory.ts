import { CreateGymPassRequest } from "../models/gym-pass/create-gym-pass.request";
import { UpdateGymPassRequest } from "../models/gym-pass/update-gym-pass.request";
import { DeleteGymPassRequest } from "../models/gym-pass/delete-gym-pass.request";

export namespace GymPassRequestFactory {

  export const getCreateGymPassRequest = (
    name: string,
    price: number,
    duration: number
  ): CreateGymPassRequest =>
    new CreateGymPassRequest(name, price, duration);

  export const getUpdateGymPassRequest = (
    id: string,
    name: string,
    price: number,
    duration: number
  ): UpdateGymPassRequest =>
    new UpdateGymPassRequest(id, name, price, duration);

  export const getDeleteGymPassRequest = (id: string): DeleteGymPassRequest =>
    new DeleteGymPassRequest(id);

}
