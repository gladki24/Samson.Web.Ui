import { MainComponentBase } from "../main-component.base";
import { Store } from "@ngxs/store";
import { ActivatedRoute } from "@angular/router";
import { Gate } from "../../../../actions/gate.actions";
import { GateState } from "../../../../states/gate.state";
import { Observable } from "rxjs";
import { EntranceValidationInfoViewModel } from "../../../shared/models/gate/entrance-validation-info-view.model";
import { Directive, ViewChild } from "@angular/core";
import { GateFormComponent } from "../../components/gate/entrance-gate-form/gate-form.component";

@Directive()
export  class GateComponentBase extends MainComponentBase {

  @ViewChild(GateFormComponent) private readonly _formRef?: GateFormComponent;

  public readonly validationResult$: Observable<EntranceValidationInfoViewModel>;
  protected gymObject: string = '';
  protected userId: string = '';

  public constructor(
    title: string,
    subtitle: string,
    protected readonly store: Store,
    route: ActivatedRoute
  ) {
    super(title, subtitle);

    route.queryParamMap.subscribe(queryParamMaps => this.gymObject = queryParamMaps.get('gymObject') as string);
    this.validationResult$ = store.select(GateState.validationResult);
  }


  public onUserChange(userId: string): void {
    this.userId = userId;
    this.store.dispatch(new Gate.Valid(this.gymObject, userId)).subscribe();
  }

  public clear(): void {
    this._formRef?.form.reset();
    this._formRef?.form.markAsUntouched();
    this._formRef?.form.markAsPending();
  }
}
