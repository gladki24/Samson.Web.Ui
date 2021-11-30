import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WelcomeNavigatorService {

  public constructor(
    private readonly _router: Router
  ) { }

  public login(): Promise<boolean> {
    return this._router.navigate(['/welcome/login']);
  }

  public register(): Promise<boolean> {
    return this._router.navigate(['/welcome/register']);
  }

  public home(): Promise<boolean> {
    return this._router.navigate(['/']);
  }
}
