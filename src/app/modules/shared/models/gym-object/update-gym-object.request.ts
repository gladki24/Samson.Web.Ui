import { CovidConfigurationRequest } from "../covid-configuration/covid-configuration.request";

export class UpdateGymObjectRequest {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public covidConfiguration: CovidConfigurationRequest
  ) {
  }
}
