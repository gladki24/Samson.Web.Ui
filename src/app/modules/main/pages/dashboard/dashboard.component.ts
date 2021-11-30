import { Component, OnInit } from '@angular/core';
import { MainComponentBase } from "../main-component.base";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent
  extends MainComponentBase
  implements OnInit {

  public constructor(
    private readonly _menuService: MenuService
  ) {
    super('Pulpit', 'Serwis internetowy sieci siłowni Samson')
  }

  public ngOnInit(): void {
  }

}
