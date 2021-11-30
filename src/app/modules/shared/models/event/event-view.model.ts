export class EventViewModel {

  public id: string;
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public maximumParticipants: number;
  public participantsId: string[];
  public eventSupervisorId: string;
  public gymRoomId: string;

  public constructor(info: EventViewModel) {
    this.id = info.id;
    this.name = info.name;
    this.startDate = new Date(info.startDate);
    this.endDate = new Date(info.endDate);
    this.maximumParticipants = info.maximumParticipants;
    this.participantsId = [...info.participantsId];
    this.eventSupervisorId = info.eventSupervisorId;
    this.gymRoomId = info.gymRoomId;
  }
}
