import { Component, Input, OnInit } from '@angular/core';

/**
 * Default input field component
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /**
   * Label of input field
   */
  @Input() public label = '';

  /**
   * Type of input field
   */
  @Input() public type = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
