export class ControllerCommunicationServiceBase {

  public constructor(
    private readonly _controllerName: string
  ) {
  }

  protected getUrl(endpointName: string): string {
    return `${this._controllerName}/${endpointName}`;
  }
}
