import { Injectable } from '@angular/core';
import { NotificationService } from "../../../services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationNotificationService {

  public constructor(
    private readonly _notificationService: NotificationService
  ) { }

  public notifyAccountRegistered(): void {
    this._notificationService.showSuccess('Konto zostało utworzone.\nZaloguj się za pomocą formy logowania.');
  }
}
