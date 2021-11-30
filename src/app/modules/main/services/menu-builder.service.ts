import { Injectable } from '@angular/core';
import { MenuButton, MenuButtonInfo } from "../models/menu-button.model";

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  private _buttons: MenuButtonInfo[] = [];

  public addButton(button: MenuButtonInfo): this {
    this._buttons.push(button);
    return this;
  }

  public build(): MenuButton[] {
    return this._buttons.map(buttonInfo => new MenuButton(buttonInfo));
  }

  public clear(): void {
    this._buttons = [];
  }
}
