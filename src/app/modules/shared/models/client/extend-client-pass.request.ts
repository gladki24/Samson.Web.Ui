export class ExtendClientPassRequest {
  public constructor(
    public readonly clientId: string,
    public readonly gymPassTypeId: string
  ) {
  }
}
