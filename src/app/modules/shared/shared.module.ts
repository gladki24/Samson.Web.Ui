import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import { FieldComponent } from './components/input/field.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";



@NgModule({
  declarations: [

    FieldComponent
  ],
  exports: [
    FieldComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
