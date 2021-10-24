import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatDrawer) private _sidebarDrawer?: MatDrawer

  public onToggleMenu(): void {
    this._sidebarDrawer?.toggle();
  }
}
