import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent extends MainComponentBase{

  public constructor() {
    super('Bramka', 'Sprawdź czy jest możliwość wejścia na siłownie przy obowiązujących obostrzeniach');
  }
}
