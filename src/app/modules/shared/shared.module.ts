import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
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



@NgModule({
  declarations: [

    GymObjectSelectComponent,
      SelectBoxComponent,
      TextBoxComponent,
      RadioBoxComponent,
      YesNoPipe
  ],
  exports: [
    GymObjectSelectComponent,
    TextBoxComponent,
    RadioBoxComponent,
    YesNoPipe
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
    MatRadioModule
  ]
})
export class SharedModule { }
