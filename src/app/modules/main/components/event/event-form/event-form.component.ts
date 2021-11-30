import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { Moment } from "moment";

export interface EventFormViewModel {
  name: string,
  startDate: Moment,
  startTime: string,
  endDate: Moment,
  endTime: Moment,
  maximumParticipants: number,
  gymRoomId: string
}

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent extends FormComponentBase {

  @Output() update = new EventEmitter<EventFormViewModel>();

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public startDate?: Date;
  @Input() public endDate?: Date;
  @Input() public maximumParticipants?: number;
  @Input() public gymRoomId?: string;

  public constructor(formBuilder: FormBuilder) {
    super(
      formBuilder.group({
        name: ['', Validators.required],
        startDate: ['', Validators.required],
        startTime: ['', Validators.required],
        endDate: ['', Validators.required],
        endTime: ['', Validators.required],
        maximumParticipants: ['', Validators.required],
        gymRoomId: ['', Validators.required]
      })
    );
  }


  public onSubmit(): void {
    this.update.next(this.form.value);

    if (!this.id) {
      this.form.reset();
    }
  }
}
