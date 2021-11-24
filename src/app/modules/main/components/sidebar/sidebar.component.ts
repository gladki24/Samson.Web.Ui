import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { MenuButton } from "../../models/menu-button.model";
import { Icon } from "../../../shared/enums/icon.enum";

/**
 * Sidebar component
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() public close = new EventEmitter<void>();

  public get buttons(): MenuButton[] {
    return this._service.buttons;
  }

  public readonly Icon = Icon;

  public constructor(
    private readonly _service: MenuService
  ) {
  }

  public ngOnInit(): void {
    this._service.buildMenuButtons();
  }

  public logout(): void {
    this._service.logout();
  }

  public closeSidebar(): void {
    this.close.emit();
  }
}
