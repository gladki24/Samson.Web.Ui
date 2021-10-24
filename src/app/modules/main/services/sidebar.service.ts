import { Injectable } from '@angular/core';
import { MenuBuilderService } from "./menu-builder.service";
import { MenuButton } from "../models/menu-button.model";
import { Icon } from "../../shared/enums/icon.enum";

/**
 * Sidebar menu component
 */
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  /**
   * Menu's buttons
   */
  public get buttons(): MenuButton[] {
    return this._buttons;
  }

  private _buttons: MenuButton[] = [];

  /**
   * Default constructor
   * @param _menuButtonBuilder service to build buttons list
   */
  public constructor(
    private readonly _menuButtonBuilder: MenuBuilderService
  ) {
  }

  /**
   * Initialize buttons list
   */
  public buildMenuButtons(): void {
    this._menuButtonBuilder
      .addButton({
        url: '',
        text: 'Pulpit',
        icon: Icon.Dashboard
      })
      .addButton({
        url: 'profile',
        text: 'Konto',
        icon: Icon.Profile
      });


    this._buttons = this._menuButtonBuilder.build();
  }
}
