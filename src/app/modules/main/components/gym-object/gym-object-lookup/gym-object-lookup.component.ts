import { Component, Input } from '@angular/core';
import { GymObjectService } from "../../../../shared/services/api-service/gym-object.service";
import { GymObjectViewModel } from "../../../../shared/models/gym-object/gym-object-view.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-gym-object-lookup',
  templateUrl: './gym-object-lookup.component.html'
})
export class GymObjectLookupComponent {

  @Input()
  public get gymObjectId(): string | undefined {
    return this._gymObjectId;
  }

  public set gymObjectId(value: string | undefined) {
    this._gymObjectId = value;
    this._initializeGymObject$();
  }

  public get gymObject$(): Observable<GymObjectViewModel> | undefined {
    return this._gymObject$;
  }

  private _gymObjectId?: string;
  private _gymObject$?: Observable<GymObjectViewModel>;

  public constructor(
    private readonly _gymObjectService: GymObjectService
  ) {
  }

  private _initializeGymObject$(): void {
    if (this._gymObjectId)
      this._gymObject$ = this._gymObjectService.get(this._gymObjectId);
  }
}
