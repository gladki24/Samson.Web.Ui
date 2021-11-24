import { Component, OnInit } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss']
})
export class GymPassComponent
  extends MainComponentBase
  implements OnInit {

  public constructor() {
    super('Zarządzanie karnetem', 'Sprawdź datę ważności karnetu i jeśli to konieczne przedłuż go');
  }

  ngOnInit(): void {
  }

}
