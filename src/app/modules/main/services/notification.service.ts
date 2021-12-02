import { Injectable } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

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

  public notifyGymPassExtended(): void {
    this._notificationService.showSuccess('Karnet został przedłużony');
  }

  public notifyGymPassCreated(): void {
    this._notificationService.showSuccess('Karnet został utworzony');
  }

  public notifyGymPassUpdated(): void {
    this._notificationService.showSuccess('Karnet został zaktualizowany');
  }

  public notifyGymPassDeleted(): void {
    this._notificationService.showSuccess('Siłownia została usnięta');
  }

  public notifyGymObjectCreated(): void {
    this._notificationService.showSuccess('Siłownia zostałą utworzona');
  }

  public notifyGymObjectUpdated(): void {
    this._notificationService.showSuccess('Siłownia została zaktualizowana');
  }

  public notifyGymObjectDeleted(): void {
    this._notificationService.showSuccess('Karnet został usunięty');
  }

  public notifyGymRoomAdded(): void {
    this._notificationService.showSuccess('Pokój został dodany');
  }

  public notifyGymRemoved(): void {
    this._notificationService.showSuccess('Pokój został usunięty');
  }

  public notifyCreatedIndividualTraining(): void {
    this._notificationService.showSuccess('Utworzono treining indywidualny');
  }

  public notifyTrainingEnroll(): void {
    this._notificationService.showSuccess('Zapisano na trening');
  }

  public notifyTrainingCancelled(): void {
    this._notificationService.showSuccess('Anulowano trening');
  }

  public notifyTraningConfirmed(): void {
    this._notificationService.showSuccess('Potwierdzono trening');
  }

  public notifyExerciseMachineUpdated(): void {
    this._notificationService.showSuccess('Maszyna została zaktualizowana');
  }

  public notifyExerciseMachineDeleted(): void {
    this._notificationService.showSuccess('Maszyna została usunięta');
  }

  public notifyExerciseMachineCreated(): void {
    this._notificationService.showSuccess('Maszyna została utworzona');
  }

  public notifyPersonalTrainerCreated(): void {
    this._notificationService.showSuccess('Konto trenera personalnego zostało utworzone');
  }

  public notifyEventCreated(): void {
    this._notificationService.showSuccess('Wydarzenie zostało utworzone');
  }

  public notifyEventDeleted(): void {
    this._notificationService.showSuccess('Wydarzenie zostało usunięte');
  }

  public notifyEventEnroll(): void {
    this._notificationService.showSuccess('Zapisano się na wydarzenie');
  }

  public notifyEventResign(): void {
    this._notificationService.showSuccess('Zrezygnowano z udziału w wydarzeniu');
  }
}
