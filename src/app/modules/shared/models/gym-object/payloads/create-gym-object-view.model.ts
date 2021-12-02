import { CovidConfigurationRequest } from "../../covid-configuration/covid-configuration.request";
import { GymRoomRequest } from "../../gym-room/gym-room.request";

export interface CreateGymObjectViewModel {
  name: string;
  covidConfiguration: CovidConfigurationRequest;
  rooms: GymRoomRequest[]
}
