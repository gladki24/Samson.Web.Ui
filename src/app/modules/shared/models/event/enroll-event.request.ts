export class EnrollEventRequest {
  public constructor(
    public readonly clientId: string,
    public readonly eventId: string
  ) {
  }
}
