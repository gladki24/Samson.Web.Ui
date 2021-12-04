import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngxs/store";
import { LoginState } from "../states/login.state";
import { Role } from "../enums/role.enum";

@Directive({
  selector: '[appPersonalTrainerAccess]'
})
export class PersonalTrainerAccessDirective {

  private _hasView: boolean = false;

  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    store: Store) {
    store.select(LoginState.tokenData).subscribe(data => {
      if (!data || !data.role) {
        return;
      }

      const isPersonalTrainer = data.role.includes(Role.PersonalTrainer);

      if (!this._hasView && isPersonalTrainer) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (this._hasView && isPersonalTrainer) {
        this.viewContainer.clear();
        this._hasView = false;
      }
    });
  }
}
