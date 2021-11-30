import { Component, OnInit } from '@angular/core';
import { GymObjectSelectService } from "./services/gym-object-select.service";
import { GymObjectViewModel } from "../../../models/gym-object/gym-object-view.model";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ReactiveInputBase } from "../../../classes/reactive-input.base";

@Component({
  selector: ' app-gym-object-select',
  templateUrl: './gym-object-select.component.html',
  providers: [
    GymObjectSelectService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GymObjectSelectComponent,
      multi: true
    }
  ]
})
export class GymObjectSelectComponent extends ReactiveInputBase<string> implements OnInit {

  public readonly items: GymObjectViewModel[] = [];

  public constructor(
    private readonly _service: GymObjectSelectService
  ) {
    super();
  }

  public ngOnInit(): void {
    this._service.loadGymObjects()
      .subscribe(gymObjects => gymObjects
        .forEach(gymObject => this.items.push(gymObject)))
  }

}
