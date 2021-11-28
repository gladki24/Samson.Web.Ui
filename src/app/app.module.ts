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
    NgxsModule.forRoot([ClientState, LoginState, GateState, PersonalTrainerState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'login.token'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ApplicationErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
