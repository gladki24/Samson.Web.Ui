import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GymPassService } from "../../../../shared/services/api-service/gym-pass.service";
import { GymPassViewModel } from "../../../../shared/models/gym-pass/gym-pass-view.model";

@Component({
  selector: 'app-gym-pass-table',
  templateUrl: './gym-pass-table.component.html'
})
export class GymPassTableComponent implements OnInit {

  @Output() public readonly gymPassSelected = new EventEmitter<GymPassViewModel>();

  public readonly displayedColumns: string[] = ['action', 'name', 'duration', 'price'];

  public gymPasses: GymPassViewModel[] = [];

  public constructor(
    private readonly _gymPassService: GymPassService) {
  }

  public ngOnInit(): void {
    this._gymPassService.getAll().subscribe(gymPasses => {
      this.gymPasses = gymPasses;
    });
  }
}
