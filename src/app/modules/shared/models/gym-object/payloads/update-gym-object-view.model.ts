import { CovidConfigurationRequest } from "../../covid-configuration/covid-configuration.request";

export interface UpdateGymObjectViewModel {
  id: string,
  name: string,
  covidConfiguration: CovidConfigurationRequest
}
