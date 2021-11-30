import { Injectable } from '@angular/core';
import { NotificationService } from "../../../services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class LoginNotificationService {

  public constructor(
    private readonly _notificationService: NotificationService
  ) { }

  public notifyUserLogged(): void {
    this._notificationService.showSuccess("Zalogowano do systemu");
  }
}
