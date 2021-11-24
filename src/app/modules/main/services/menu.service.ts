import { Injectable } from '@angular/core';
import { MenuBuilderService } from "./menu-builder.service";
import { MenuButton } from "../models/menu-button.model";
import { Icon } from "../../shared/enums/icon.enum";
import { Store } from "@ngxs/store";
import { Login } from "../../../actions/login.actions";
import { MainNotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public get buttons(): MenuButton[] {
    return this._buttons;
  }

  private _buttons: MenuButton[] = [];

  public constructor(
    private readonly _menuButtonBuilder: MenuBuilderService,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
  }

  public buildMenuButtons(): void {
    this._menuButtonBuilder.clear();

    this._menuButtonBuilder
      .addButton({
        url: '',
        text: 'Pulpit',
        icon: Icon.Dashboard
      })
      .addButton({
        url: 'event',
        text: 'Wydarzenia',
        icon: Icon.Event
      })
      .addButton({
        url: 'gate',
        text: 'Tryb bramki',
        icon: Icon.Gate
      })
      .addButton({
        url: 'management',
        text: 'Zarządzanie siłowniami',
        icon: Icon.Manage
      })
      .addButton({
        url: 'gym-pass',
        text: 'Zarządzanie karnetem',
        icon: Icon.GymPass
      })
      .addButton({
        url: 'training',
        text: 'Treningi indywidualne',
        icon: Icon.IndividualTraining
      })
      .addButton({
        url: 'account',
        text: 'Konto',
        icon: Icon.Profile
      });


    this._buttons = this._menuButtonBuilder.build();
  }

  public logout(): void {
    this._store.dispatch(new Login.Logout()).subscribe(() => {
      this._notificationService.notifyLogout();
    });
  }
}
