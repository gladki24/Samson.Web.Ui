export class UserViewModel {
  public id: string;
  public login: string;
  public name: string;
  public surname: string;

  public constructor(info: UserViewModel) {
    this.id = info.id;
    this.login = info.login;
    this.name = info.name;
    this.surname = info.surname;
  }
}
