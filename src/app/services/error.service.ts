import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public getClientMessage(error: Error): string {
    return error.message;
  }

  public getServerMessage(error: HttpErrorResponse): string {
    if (!!error.error) {
      return error.error['message'];
    }
    return error.message;
  }
}
