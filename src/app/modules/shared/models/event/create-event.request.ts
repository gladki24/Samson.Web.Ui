export class CreateEventRequest {
  public constructor(
    public readonly name: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly maximumParticipants: number,
    public readonly participantsId: string[],
    public readonly eventSupervisorId: string,
    public readonly gymRoomId: string
  ) {
  }
}
