import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./pages/main/main.component";
import { AccountComponent } from "./pages/account/account.component";
import { EventComponent } from "./pages/event/event.component";
import { GateComponent } from "./pages/gate/gate.component";
import { ManagementComponent } from "./pages/management/management.component";
import { GymPassComponent } from "./pages/gym-pass/gym-pass.component";
import { IndividualTrainingComponent } from "./pages/individual-training/individual-training.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'gate',
        component: GateComponent
      },
      {
        path: 'management',
        component: ManagementComponent
      },
      {
        path: 'gym-pass',
        component: GymPassComponent
      },
      {
        path: 'training',
        component: IndividualTrainingComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
