import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngxs/store";
import { LoginState } from "../states/login.state";
import { Role } from "../enums/role.enum";

@Directive({
  selector: '[appClientAccess]'
})
export class ClientAccessDirective {

  private _isClient: boolean = false;
  private _hasView: boolean = false;

  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    store: Store) {
    store.select(LoginState.tokenData).subscribe(data => {
      if (!data || !data.role) {
        return;
      }
      this._isClient = data.role.includes(Role.Client);

      if (!this._hasView && this._isClient) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (this._hasView && this._isClient) {
        this.viewContainer.clear();
        this._hasView = false;
      }
    });
  }
}
