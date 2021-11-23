export class CreateGymPassRequest {
  public constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly duration: number
  ) {
  }
}
