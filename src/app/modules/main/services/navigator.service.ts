import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainNavigatorService {

  public constructor(
    private readonly _router: Router
  ) { }

  public home(): Promise<boolean> {
    return this._router.navigate(['/']);
  }

  public entranceGate(gymObjectId: string): Promise<boolean> {
    return this._router.navigate(['/entrance-gate'], {
      queryParams: {
        gymObject: gymObjectId
      }
    });
  }

  public exitGate(gymObjectId: string): Promise<boolean> {
    return this._router.navigate(['exit-gate'], {
      queryParams: {
        gymObject: gymObjectId
      }
    });
  }
}
