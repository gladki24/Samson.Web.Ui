import { Component, Input } from '@angular/core';

/**
 * Default input field component
 */
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  /**
   * Label of input field
   */
  @Input() public label = '';

}
