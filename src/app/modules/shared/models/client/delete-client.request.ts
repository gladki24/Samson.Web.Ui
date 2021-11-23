export class DeleteClientRequest {
  public constructor(
    public readonly id: string,
    public readonly password: string
  ) {
  }
}
