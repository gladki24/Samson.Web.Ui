import { Component, OnInit } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent
  extends MainComponentBase
  implements OnInit {

  public constructor() {
    super('Wydarzenia', 'Sprawdź dostępne wydarzenia i zapisz się na najciekawsze');
  }

  ngOnInit(): void {
  }

}
