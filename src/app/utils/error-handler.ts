import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorService } from "../services/error.service";
import { NotificationService } from "../services/notification.service";
import { WelcomeNavigatorService } from "../modules/welcome/services/navigator.service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApplicationErrorHandler implements ErrorHandler {

  public constructor(
    private readonly _errorService: ErrorService,
    private readonly _notificationService: NotificationService,
    private readonly _navigator: WelcomeNavigatorService
  ) {
  }

  public handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this._navigator.login();
      }

      this._notificationService.showError(this._errorService.getServerMessage(error));
    } else {
      this._notificationService.showError(this._errorService.getClientMessage(error));
    }

    console.error(error);
  }

}
