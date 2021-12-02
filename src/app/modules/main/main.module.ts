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
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ConfigureGateFormComponent } from './components/gate/configure-gate-form/configure-gate-form.component';
import { MatRadioModule } from "@angular/material/radio";
import { EntranceGateComponent } from './pages/gates/entrance-gate/entrance-gate.component';
import { ExitGateComponent } from './pages/gates/exit-gate/exit-gate.component';
import { GateFormComponent } from './components/gate/entrance-gate-form/gate-form.component';
import { AccountFormComponent } from './components/account/account-form/account-form.component';
import { PasswordModalComponent } from './components/account/password-modal/password-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { GymPassTableComponent } from './components/gym-pass/gym-pass-table/gym-pass-table.component';
import { MatTableModule } from "@angular/material/table";
import { IndividualTrainingListComponent } from './components/individual-training/individual-training-list/individual-training-list.component';
import { MatTabsModule } from "@angular/material/tabs";
import { IndividualTrainingFormComponent } from './components/individual-training/individual-training-form/individual-training-form.component';
import { GymObjectLookupComponent } from './components/gym-object/gym-object-lookup/gym-object-lookup.component';
import { PersonalTrainerLookupComponent } from './components/personal-trainer/personal-trainer-lookup/personal-trainer-lookup.component';
import { IndividualTrainingPipe } from './pipes/individual-trainining.pipe';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { ExerciseMachineFormComponent } from './components/exercise-machine/exercise-machine-form/exercise-machine-form.component';
import { UpdateExerciseMachineComponent } from './components/exercise-machine/update-exercise-machine/update-exercise-machine.component';
import { CreateExerciseMachineComponent } from './components/exercise-machine/create-exercise-machine/create-exercise-machine.component';
import { ExerciseMachineTypeCheckBoxComponent } from './components/exercise-machine/exercise-machine-type-check-box/exercise-machine-type-check-box.component';
import { ExerciseMachineComponent } from './components/exercise-machine/exercise-machine/exercise-machine.component';
import { ExerciseMachineSelectBoxComponent } from './components/exercise-machine/exercise-machine-select-box/exercise-machine-select-box.component';
import { PersonalTrainerFormComponent } from './components/personal-trainer/personal-trainer-form/personal-trainer-form.component';
import { CreatePersonalTrainerComponent } from './components/personal-trainer/create-personal-trainer/create-personal-trainer.component';
import { PersonalTrainerComponent } from './components/personal-trainer/personal-trainer/personal-trainer.component';
import { CreateEventComponent } from './components/event/create-event/create-event.component';
import { GymRoomSelectBoxComponent } from './components/gym-room/gym-room-select-box/gym-room-select-box.component';
import { GymPassFormComponent } from './components/gym-pass/gym-pass-form/gym-pass-form.component';
import { CreateGymPassComponent } from './components/gym-pass/create-gym-pass/create-gym-pass.component';
import { UpdateGymPassComponent } from './components/gym-pass/update-gym-pass/update-gym-pass.component';
import { GymPassManageComponent } from "./components/gym-pass/gym-pass/gym-pass-manage.component";
import { GymPassSelectBoxComponent } from './components/gym-pass/gym-pass-select-box/gym-pass-select-box.component';
import { GymObjectComponent } from './components/gym-object/gym-object/gym-object.component';
import { CreateGymObjectComponent } from './components/gym-object/create-gym-object/create-gym-object.component';
import { UpdateGymObjectComponent } from './components/gym-object/update-gym-object/update-gym-object.component';
import { GymObjectFormComponent } from './components/gym-object/gym-object-form/gym-object-form.component';
import { GymObjectSelectBoxComponent } from './components/gym-object/gym-object-select-box/gym-object-select-box.component';
import { AddGymRoomComponent } from './components/gym-room/add-gym-room/add-gym-room.component';
import { RemoveGymRoomComponent } from './components/gym-room/remove-gym-room/remove-gym-room.component';
import { PreviewEventComponent } from './components/event/preview-event/preview-event.component';
import { GymRoomLookupComponent } from './components/gym-room/gym-room-lookup/gym-room-lookup.component';


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
    DashboardComponent,
    ConfigureGateFormComponent,
    EntranceGateComponent,
    ExitGateComponent,
    GateFormComponent,
    AccountFormComponent,
    PasswordModalComponent,
    GymPassTableComponent,
    IndividualTrainingListComponent,
    IndividualTrainingFormComponent,
    GymObjectLookupComponent,
    PersonalTrainerLookupComponent,
    IndividualTrainingPipe,
    EventFormComponent,
    EventListComponent,
    ExerciseMachineFormComponent,
    UpdateExerciseMachineComponent,
    CreateExerciseMachineComponent,
    ExerciseMachineTypeCheckBoxComponent,
    ExerciseMachineComponent,
    ExerciseMachineSelectBoxComponent,
    PersonalTrainerFormComponent,
    CreatePersonalTrainerComponent,
    PersonalTrainerComponent,
    CreateEventComponent,
    GymRoomSelectBoxComponent,
    GymPassFormComponent,
    CreateGymPassComponent,
    UpdateGymPassComponent,
    GymPassManageComponent,
    GymPassSelectBoxComponent,
    GymObjectComponent,
    CreateGymObjectComponent,
    UpdateGymObjectComponent,
    GymObjectFormComponent,
    GymObjectSelectBoxComponent,
    AddGymRoomComponent,
    RemoveGymRoomComponent,
    PreviewEventComponent,
    GymRoomLookupComponent
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
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule,
        MatRadioModule,
        MatDialogModule,
        MatTableModule,
        MatTabsModule
    ]
})
export class MainModule {
}
