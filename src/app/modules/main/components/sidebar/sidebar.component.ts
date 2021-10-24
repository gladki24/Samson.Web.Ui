import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";
import { MenuButton } from "../../models/menu-button.model";

/**
 * Sidebar component
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /**
   * Menu's buttons
   */
  public get buttons(): MenuButton[] {
    return this._service.buttons;
  }

  /**
   * Default constructor
   * @param _service logic service of sidebar component
   */
  public constructor(
    private readonly _service: SidebarService
  ) {
  }

  /**
   * Initialize menu buttons on component OnInit
   */
  public ngOnInit(): void {
    this._service.buildMenuButtons();
  }

}
