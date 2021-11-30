import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent extends MainComponentBase {

  public constructor() {
    super('Zarządzanie siłowniami', 'Zarządzaj obiektami sieci. Dodawaj pomieszczenia i definiuj limity COVIDowe');
  }
}
