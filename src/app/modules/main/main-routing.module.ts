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
import { EntranceGateComponent } from "./pages/gates/entrance-gate/entrance-gate.component";
import { ExitGateComponent } from "./pages/gates/exit-gate/exit-gate.component";
import { PreviewEventComponent } from "./components/event/preview-event/preview-event.component";
import { PreviewEventResolver } from "./components/event/preview-event/preview-event.resolver";
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
        component: GateComponent,
      },
      {
        path: 'entrance-gate',
        component: EntranceGateComponent
      },
      {
        path: 'exit-gate',
        component: ExitGateComponent
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
      },
      {
        path: 'event-preview',
        component: PreviewEventComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          event: PreviewEventResolver
        }
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
