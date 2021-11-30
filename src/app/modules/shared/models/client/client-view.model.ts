import { UserViewModel } from "../user/user-view.model";
import { SubscriptionViewModel } from "../subscription/subscription-view.model";

export class ClientViewModel extends UserViewModel {
  public subscription?: SubscriptionViewModel;

  public constructor(info: ClientViewModel) {
    super(info);

    if (!!info) {
      if (info.subscription)
        this.subscription = new SubscriptionViewModel(info.subscription);
    }
  }
}
