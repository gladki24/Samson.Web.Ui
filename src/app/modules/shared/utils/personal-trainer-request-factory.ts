import { CreatePersonalTrainerRequest } from "../models/personal-trainer/create-personal-trainer.request";
import { UpdatePersonalTrainerRequest } from "../models/personal-trainer/update-personal-trainer.request";
import { DeletePersonalTrainerRequest } from "../models/personal-trainer/delete-personal-trainer.request";

export namespace PersonalTrainerRequestFactory {
  export const GetCreatePersonalTrainerRequest = (
    name: string,
    surname: string,
    login: string,
    password: string
  ): CreatePersonalTrainerRequest =>
    new CreatePersonalTrainerRequest(name, surname, login, password);

  export const GetPersonalTrainerUpdateRequest = (
    id: string,
    name: string,
    surname: string,
  ): UpdatePersonalTrainerRequest =>
    new UpdatePersonalTrainerRequest(id, name, surname);

  export const GetPersonalTrainerDeleteRequest = (
    id: string,
    password: string
  ): DeletePersonalTrainerRequest =>
    new DeletePersonalTrainerRequest(id, password);
}
