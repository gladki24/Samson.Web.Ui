import { Role } from "../../enums/role.enum";

export interface TokenViewModel {
  id: string;
  nameid: string;
  role: Role[];
}
