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
import { EventComponent } from './pages/event/event.component';
import { GateComponent } from './pages/gate/gate.component';
import { ManagementComponent } from './pages/management/management.component';
import { GymPassComponent } from './pages/gym-pass/gym-pass.component';
import { IndividualTrainingComponent } from './pages/individual-training/individual-training.component';
import { AccountComponent } from './pages/account/account.component';
import { MatCardModule } from "@angular/material/card";
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    EventComponent,
    GateComponent,
    ManagementComponent,
    GymPassComponent,
    IndividualTrainingComponent,
    AccountComponent,
    DashboardComponent
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
        LayoutModule,
        MatCardModule
    ]
})
export class MainModule {
}
