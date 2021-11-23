export class UpdateGymPassRequest {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly duration: number
  ) {
  }
}
