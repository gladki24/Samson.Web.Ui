import { CreateGymObjectRequest } from "../models/gym-object/create-gym-object.request";
import { GymRoomRequest } from "../models/gym-room/gym-room.request";
import { UpdateGymObjectRequest } from "../models/gym-object/update-gym-object.request";
import { DeleteGymPassRequest } from "../models/gym-pass/delete-gym-pass.request";
import { CovidConfigurationRequest } from "../models/covid-configuration/covid-configuration.request";

export namespace GymObjectRequestFactory {
  export const getCreateGymObjectRequest = (
    name: string,
    covidConfiguration: CovidConfigurationRequest,
    gymRooms: GymRoomRequest[] = []
  ): CreateGymObjectRequest =>
    new CreateGymObjectRequest(name, covidConfiguration, gymRooms);

  export const getUpdateGymObjectRequest = (
    id: string,
    name: string,
    covidConfiguration: CovidConfigurationRequest
  ): UpdateGymObjectRequest =>
    new UpdateGymObjectRequest(id, name, covidConfiguration);

  export const getDeleteGymObjectRequest = (
    id: string
  ): DeleteGymPassRequest =>
    new DeleteGymPassRequest(id);
}
