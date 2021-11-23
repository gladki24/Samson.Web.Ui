export class UpdateEventRequest {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly maximumParticipants: number,
    public readonly eventSupervisorId: string,
    public readonly gymRoomId: string
  ) {
  }
}
