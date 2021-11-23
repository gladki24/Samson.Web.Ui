export class GateEntryRequest {
  public constructor(
    public readonly gymObjectId: string,
    public readonly clientId: string
  ) {
  }
}
