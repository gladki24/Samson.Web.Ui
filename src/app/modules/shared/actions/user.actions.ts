import { DeleteUserViewModel } from "../models/user/delete-user-view.model";
import { UpdateUserViewModel } from "../models/user/update-user-view.model";

export namespace User {

  export class Get {
    static readonly type = '[User] Get';
  }


  export class Update {
    static readonly type = '[User] Update';
    public constructor(public payload: UpdateUserViewModel) {
    }
  }

  export class Delete {
    static readonly type = '[User] Delete';
    public constructor(public payload: DeleteUserViewModel) {
    }
  }
}
