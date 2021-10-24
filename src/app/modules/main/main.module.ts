import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainRoutingModule } from "./main-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    LayoutModule
  ]
})
export class MainModule {
}
