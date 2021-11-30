import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { GymObjectSelectComponent } from './components/inputs/gym-object-select/gym-object-select.component';
import { MatSelectModule } from "@angular/material/select";
import { SelectBoxComponent } from './components/inputs/select-box/select-box.component';
import { TextBoxComponent } from './components/inputs/text-box/text-box.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RadioBoxComponent } from './components/inputs/radio-box/radio-box.component';
import { MatRadioModule } from "@angular/material/radio";
import { YesNoPipe } from './pipes/yes-no.pipe';
import { NullPipe } from './pipes/null.pipe';
import { PersonalTrainerAccessDirective } from './directivies/personal-trainer-access.directive';
import { ClientAccessDirective } from './directivies/client-access.directive';
import { DateBoxComponent } from './components/inputs/date-box/date-box.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { TimeBoxComponent } from './components/inputs/time-box/time-box.component';
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";


@NgModule({
  declarations: [

    GymObjectSelectComponent,
    SelectBoxComponent,
    TextBoxComponent,
    RadioBoxComponent,
    YesNoPipe,
    NullPipe,
    PersonalTrainerAccessDirective,
    ClientAccessDirective,
    DateBoxComponent,
    DateBoxComponent,
    TimeBoxComponent
  ],
  exports: [
    GymObjectSelectComponent,
    TextBoxComponent,
    RadioBoxComponent,
    YesNoPipe,
    NullPipe,
    PersonalTrainerAccessDirective,
    ClientAccessDirective,
    SelectBoxComponent,
    DateBoxComponent,
    TimeBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatIconModule,
    NgxMatTimepickerModule
  ]
})
export class SharedModule {
}
