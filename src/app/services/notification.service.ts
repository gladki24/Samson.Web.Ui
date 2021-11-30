import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly _displayTimeInMs = 5000;

  public constructor(
    private readonly _snackBar: MatSnackBar
  ) { }

  public showSuccess(message: string): void {
    this._snackBar.open(message, 'Zamknij', {
      duration: this._displayTimeInMs
    });
  }

  public showError(message: string): void {
    this._snackBar.open(message, 'Zamknij', { panelClass: ['error']})
  }
}
