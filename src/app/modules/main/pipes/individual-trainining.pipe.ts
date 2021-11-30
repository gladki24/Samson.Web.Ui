import { Pipe, PipeTransform } from '@angular/core';
import { IndividualTrainingType } from "../../shared/enums/individual-training-type.enum";

@Pipe({
  name: 'individualTraining'
})
export class IndividualTrainingPipe implements PipeTransform {

  public transform(value: IndividualTrainingType): string {
    switch (value) {
      case IndividualTrainingType.Cancelled:
        return 'Anulowany';
      case IndividualTrainingType.Open:
        return 'Dostępny';
      case IndividualTrainingType.Pending:
        return 'Oczekujący na potwierdzenie';
      case IndividualTrainingType.Confirmed:
        return 'Potwierdzony';
    }
  }

}
