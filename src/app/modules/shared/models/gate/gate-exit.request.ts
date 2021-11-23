export class GateExitRequest {
  public constructor(
    public readonly gymObjectId: string,
    public readonly clientId: string
  ) {
  }
}
