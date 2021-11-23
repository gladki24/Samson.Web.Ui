export class ResignEventRequest {
  public constructor(
    public readonly clientId: string,
    public readonly eventId: string
  ) {
  }
}
