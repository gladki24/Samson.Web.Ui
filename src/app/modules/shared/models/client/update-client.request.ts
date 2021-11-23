export class UpdateClientRequest {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly surname: string
  ) {
  }
}
