export class GateValidEntranceRequest {
  public constructor(
    public readonly gymObjectId: string,
    public readonly clientId: string
  ) {
  }
}
