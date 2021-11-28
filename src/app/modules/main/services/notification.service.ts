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

  public notifyGateCross(): void {
    this._notificationService.showSuccess('Przejdź przez bramkę');
  }

  public notifyUserUpdated(): void {
    this._notificationService.showSuccess('Konto użytkownika zostało zakutalizowane');
  }

  public notifyUserDeleted(): void {
    this._notificationService.showSuccess('Konto użytkownika zostało usunięte');
  }
}
