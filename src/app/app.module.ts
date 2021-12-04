import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApplicationErrorHandler } from "./utils/error-handler";
import { ServerErrorInterceptor } from "./interceptors/server-error.interceptor";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ClientState } from "./modules/shared/states/client.state";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { LoginState } from "./modules/shared/states/login.state";
import { GateState } from "./modules/shared/states/gate.state";
import { PersonalTrainerState } from "./modules/shared/states/personal-trainer.state";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { UserState } from "./modules/shared/states/user.state";
import { IndividualTrainingState } from "./modules/shared/states/individual-training.state";
import { ExerciseMachineState } from "./modules/shared/states/exercise-machine-state.service";
import { GymPassState } from "./modules/shared/states/gym-pass.state";
import { GymObjectState } from "./modules/shared/states/gym-object.state";
import { GymRoomState } from "./modules/shared/states/gym-rooms.state";
import { EventState } from "./modules/shared/states/event.state";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxsModule.forRoot([
      ClientState,
      LoginState,
      GateState,
      PersonalTrainerState,
      UserState,
      IndividualTrainingState,
      ExerciseMachineState,
      GymPassState,
      GymObjectState,
      GymRoomState,
      EventState
    ], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'login.token'
    })
  ],
  providers: [
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    {
      provide: ErrorHandler,
      useClass: ApplicationErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
