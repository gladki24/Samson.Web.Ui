import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { MainComponentBase } from "../main-component.base";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public title: string = 'Pulpit';
  public subtitle: string = 'Serwis internetowy sieci siłowni Samson';

  @ViewChild(MatDrawer) private _sidebarDrawer?: MatDrawer

  public onToggleMenu(): void {
    this._sidebarDrawer?.toggle();
  }

  public closeMenu(): void {
    this._sidebarDrawer?.close();
  }

  public onActivate(data: MainComponentBase): void {
    this.title = data.title;
    this.subtitle = data.subtitle;
  }
}
