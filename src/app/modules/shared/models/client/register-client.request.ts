export class RegisterClientRequest {
  public constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly login: string,
    public readonly password: string
  ) {
  }
}
