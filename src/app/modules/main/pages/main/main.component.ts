import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { MainComponentBase } from "../main-component.base";
import { Store } from "@ngxs/store";
import { User } from "../../../shared/actions/user.actions";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatDrawer) private _sidebarDrawer?: MatDrawer

  public title: string = 'Pulpit';
  public subtitle: string = 'Serwis internetowy sieci siłowni Samson';

  public constructor(
    private readonly _store: Store
  ) {
  }

  public ngOnInit(): void {
    this._store.dispatch(new User.Get()).subscribe();
  }

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
