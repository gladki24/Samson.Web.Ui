import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MenuNavigatorService {

  public constructor(
    private readonly _router: Router
  ) { }

  public home(): Promise<boolean> {
    return this._router.navigate(['/']);
  }
}
