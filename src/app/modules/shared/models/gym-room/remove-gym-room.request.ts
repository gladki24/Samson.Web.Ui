export class RemoveGymRoomRequest {
  public constructor(
    public readonly gymObjectId: string,
    public readonly gymRoomId: string
  ) {
  }
}
