import { MainComponentBase } from "../main-component.base";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent
  extends MainComponentBase
  implements OnInit {

  public constructor() {
    super('Konto', 'Zarządzaj swoimi danymi');
  }

  public ngOnInit(): void {
  }

}
