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



@NgModule({
  declarations: [

    GymObjectSelectComponent,
      SelectBoxComponent,
      TextBoxComponent
  ],
  exports: [
    GymObjectSelectComponent,
    TextBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
