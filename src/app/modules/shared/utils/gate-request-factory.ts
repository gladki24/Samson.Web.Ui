import { GateValidEntranceRequest } from "../models/gate/gate-valid-entrance.request";
import { GateExitRequest } from "../models/gate/gate-exit.request";
import { GateEntryRequest } from "../models/gate/gate-entry.request";

export namespace GateRequestFactory {
  export const GetGateValidEntranceRequest = (gymObjectId: string, userId: string): GateValidEntranceRequest =>
    new GateValidEntranceRequest(gymObjectId, userId);

  export const GetGateExitRequest = (gymObjectId: string, userId: string): GateExitRequest =>
    new GateExitRequest(gymObjectId, userId);

  export const GetGateEntryRequest = (gymObjectId: string, userId: string): GateEntryRequest =>
    new GateEntryRequest(gymObjectId, userId);
}
