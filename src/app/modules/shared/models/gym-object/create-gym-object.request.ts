import { CovidConfigurationRequest } from "../covid-configuration/covid-configuration.request";
import { GymRoomRequest } from "../gym-room/gym-room.request";

export class CreateGymObjectRequest {
  public constructor(
    public readonly name: string,
    public readonly covidConfiguration: CovidConfigurationRequest,
    public readonly rooms: GymRoomRequest
  ) {
  }
}
