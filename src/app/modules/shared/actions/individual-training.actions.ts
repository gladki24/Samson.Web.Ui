import { CreateIndividualTrainingViewModel } from "../models/individual-training/payloads/create-individual-training-view.model";
import { UpdateIndividualTrainingViewModel } from "../models/individual-training/payloads/update-individual-training-view.model";
import { CancelIndividualTrainingViewModel } from "../models/individual-training/payloads/cancel-individual-training-view.model";
import { EnrollIndividualTrainingViewModel } from "../models/individual-training/payloads/enroll-individual-training-view.model";
import { ConfirmIndividualTrainingViewModel } from "../models/individual-training/payloads/confirm-individual-training-view.model";

export namespace IndividualTraining {

  export class GetAll {
    public static readonly type = '[IndividualTraining] GetAll';
  }

  export class Get {
    public static readonly type = '[IndividualTraining] Get';

    public constructor(public readonly payload: string) {
    }
  }

  export class Create {
    public static readonly type = '[IndividualTraining] Create';

    public constructor(public readonly payload: CreateIndividualTrainingViewModel) {
    }
  }

  export class Update {
    public static readonly type = '[IndividualTraining] Update';

    public constructor(public readonly payload: UpdateIndividualTrainingViewModel) {
    }
  }

  export class Cancel {
    public static readonly type = '[IndividualTraining] Cancel'

    public constructor(public readonly payload: CancelIndividualTrainingViewModel) {
    }
  }

  export class Enroll {
    public static readonly type = '[IndividualTraining] Enroll'

    public constructor(public readonly payload: EnrollIndividualTrainingViewModel) {
    }
  }

  export class Confirm {
    public static readonly type = '[IndividualTraining] Confirm'

    public constructor(public readonly payload: ConfirmIndividualTrainingViewModel) {
    }
  }
}
