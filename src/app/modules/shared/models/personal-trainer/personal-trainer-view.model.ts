import { UserViewModel } from "../user/user-view.model";

export class PersonalTrainerViewModel extends UserViewModel {
  public pupilsGroupId: string;

  public constructor(info: PersonalTrainerViewModel) {
    super(info);
    this.pupilsGroupId = info.pupilsGroupId;
  }
}
