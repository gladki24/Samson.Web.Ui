import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent extends MainComponentBase {

  public constructor() {
    super('Wydarzenia', 'Sprawdź dostępne wydarzenia i zapisz się na najciekawsze');
  }
}
