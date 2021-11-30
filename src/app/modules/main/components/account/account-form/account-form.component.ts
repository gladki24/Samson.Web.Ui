import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { UpdateUserViewModel } from "../../../../shared/models/user/update-user-view.model";
import { MatDialog } from "@angular/material/dialog";
import { PasswordModalComponent } from "../password-modal/password-modal.component";
import { DeleteUserViewModel } from "../../../../shared/models/user/delete-user-view.model";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent extends FormComponentBase {

  @Input() public id?: string = '';
  @Input() public name?: string = '';
  @Input() public surname?: string = '';
  @Output() public readonly accountUpdateSubmitted = new EventEmitter<UpdateUserViewModel>();
  @Output() public readonly accountDeleteSubmitted = new EventEmitter<DeleteUserViewModel>();

  public constructor(
    formBuilder: FormBuilder,
    private readonly _dialog: MatDialog
  ) {
    super(formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    }));
  }

  public updateAccount(): void {
    const updateViewModel: UpdateUserViewModel = {
      id: this.id as string,
      name: this.form.value['name'],
      surname: this.form.value['surname']
    };

    this.accountUpdateSubmitted.emit(updateViewModel);
  }

  public openPassPasswordToDelete(): void {
    const dialogRef = this._dialog.open(PasswordModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.deleteAccount(result);
      }
    });
  }

  public deleteAccount(password: string): void {
    const deleteViewModel: DeleteUserViewModel = {
      id: this.id as string,
      password: password
    }

    this.accountDeleteSubmitted.emit(deleteViewModel);
  }
}
