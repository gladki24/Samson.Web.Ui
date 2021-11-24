import { Component, OnInit } from '@angular/core';
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-individual-training',
  templateUrl: './individual-training.component.html',
  styleUrls: ['./individual-training.component.scss']
})
export class IndividualTrainingComponent
  extends MainComponentBase
  implements OnInit {

  public constructor() {
    super('Treningi indywidualne', 'Zapisz się na treining z trenerem personalnym');
  }

  ngOnInit(): void {
  }

}
