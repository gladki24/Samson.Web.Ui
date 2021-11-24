import { CovidConfigurationViewModel } from "../covid-configuration/covid-configuration-view.model";
import { GymRoomViewModel } from "../gym-room/gym-room-view.model";

export class GymObjectViewModel {
  public id: string;
  public name: string;
  public covidConfiguration: CovidConfigurationViewModel;
  public rooms: GymRoomViewModel[];

  public constructor(info: GymObjectViewModel) {
    this.id = info.id;
    this.name = info.name;
    this.covidConfiguration = new CovidConfigurationViewModel(info.covidConfiguration);
    this.rooms = info.rooms.map(room => new GymRoomViewModel(room));
  }
}
