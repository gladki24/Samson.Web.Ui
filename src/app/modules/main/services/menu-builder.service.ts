import { Injectable } from '@angular/core';
import { MenuButton, MenuButtonInfo } from "../models/menu-button.model";

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  private readonly _buttons: MenuButtonInfo[] = [];

  /**
   * Add button to menu
   * @param button information about button to add to menu
   */
  public addButton(button: MenuButtonInfo): this {
    this._buttons.push(button);
    return this;
  }

  /**
   * Build list of menu's buttons
   * @return list of buttons
   */
  public build(): MenuButton[] {
    return this._buttons.map(buttonInfo => new MenuButton(buttonInfo));
  }
}
