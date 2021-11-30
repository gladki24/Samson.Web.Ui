import { Role } from "../enums/role.enum";
import { TokenViewModel } from "../models/token/token-view.model";

export const getRole = (token: TokenViewModel): Role => {
  if (token.role.includes(Role.Client))
    return Role.Client;
  if (token.role.includes(Role.PersonalTrainer))
    return Role.PersonalTrainer;

  throw new Error('Invalid role');
}
