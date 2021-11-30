import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorService } from "../services/error.service";
import { NotificationService } from "../services/notification.service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApplicationErrorHandler implements ErrorHandler {

  public constructor(
    private readonly _errorService: ErrorService,
    private readonly _notificationService: NotificationService
  ) {
  }

  public handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      this._notificationService.showError(this._errorService.getServerMessage(error));
    } else {
      this._notificationService.showError(this._errorService.getClientMessage(error));
    }

    console.error(error);
  }

}
