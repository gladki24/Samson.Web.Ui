import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";
import { GateConfigurationModel } from "../../models/gate-configuration.model";
import { MainNavigatorService } from "../../services/navigator.service";
import { GateType } from "../../enums/gate-type.enum";

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html'
})
export class GateComponent extends MainComponentBase{

  public constructor(
    private readonly _navigator: MainNavigatorService
  ) {
    super('Bramka', 'Sprawdź czy jest możliwość wejścia na siłownie przy obowiązujących obostrzeniach');
  }

  public onGateConfigured(configuration: GateConfigurationModel): void {
    switch (configuration.gateType) {
      case GateType.Entry: {
        this._navigator.entranceGate(configuration.gymObjectId);
        break;
      }

      case GateType.Exit: {
        this._navigator.exitGate(configuration.gymObjectId);
        break;
      }

      default: {
        throw new Error('Niewłaściwy rodzaj bramki')
      }
    }
  }
}
