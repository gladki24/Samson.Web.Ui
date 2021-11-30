import { GateType } from "../enums/gate-type.enum";

export class GateConfigurationModel {
  public constructor(
    public readonly gymObjectId: string,
    public readonly gateType: GateType
  ) {
  }
}
