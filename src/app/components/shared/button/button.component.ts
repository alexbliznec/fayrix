import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() buttonFunction = new EventEmitter<any>();
  @Input() content: string;

  constructor() { }

  perform() {
    this.buttonFunction.emit();
  }
}
