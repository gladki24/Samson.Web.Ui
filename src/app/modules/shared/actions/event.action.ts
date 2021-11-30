import { CreateEventViewModel } from "../models/event/payloads/create-event-view.model";
import { UpdateEventViewModel } from "../models/event/payloads/update-event-view.model";
import { DeleteEventViewModel } from "../models/event/payloads/delete-event-view.model";
import { EnrollEventViewModel } from "../models/event/payloads/enroll-event-view.model";
import { ResignEventViewModel } from "../models/event/payloads/resign-event-view.model";

export namespace Event {

  export class GetAll {
    public static readonly type = '[Event] GetAll';
  }

  export class Get {
    public static readonly type = '[Event] Get';

    public constructor(public readonly payload: string) {
    }
  }

  export class Create {
    public static readonly type = '[Event] Create';

    public constructor(public readonly payload: CreateEventViewModel) {
    }
  }

  export class Update {
    public static readonly type = '[Event] Update'

    public constructor(public readonly payload: UpdateEventViewModel) {
    }
  }

  export class Delete {
    public static readonly type ='[Event] Delete'

    public constructor(public readonly payload: DeleteEventViewModel) {
    }
  }

  export class Enroll {
    public static readonly type = '[Event] Enroll'

    public constructor(public readonly payload: EnrollEventViewModel) {
    }
  }

  export class Resign {
    public static readonly type = '[Event] Resign';

    public constructor(public readonly payload: ResignEventViewModel) {
    }
  }
}
