import { ClientRegistrationViewModel } from "../models/client/client-registration-view.model";
import { ClientUpdateViewModel } from "../models/client/client-update-view.model";
import { ClientDeleteViewModel } from "../models/client/client-delete-view.model";

export namespace Client {

  export class Get {
    static readonly type = '[Client] Get';

    public constructor(public payload: string) {
    }
  }

  export class Register {
    static readonly type = '[Client] Register';

    public constructor(public payload: ClientRegistrationViewModel) {
    }
  }

  export class Update {
    static readonly type = '[Client] Update';

    public constructor(public payload: ClientUpdateViewModel) {
    }
  }

  export class Delete {
    static readonly type = '[Client] Delete';

    public constructor(public payload: ClientDeleteViewModel) {
    }
  }
}
