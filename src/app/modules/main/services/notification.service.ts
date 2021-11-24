import { Injectable } from '@angular/core';
import { NotificationService } from "../../../services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class MainNotificationService {

  public constructor(
    private readonly _notificationService: NotificationService
  ) { }

  public notifyLogout(): void {
    this._notificationService.showSuccess('Wylogowano');
  }
}
