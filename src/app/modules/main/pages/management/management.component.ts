import { Component, OnInit } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent
  extends MainComponentBase
  implements OnInit {

  public constructor() {
    super('Zarządzanie siłowniami', 'Zarządzaj obiektami sieci. Dodawaj pomieszczenia i definiuj limity COVIDowe');
  }

  ngOnInit(): void {
  }

}
