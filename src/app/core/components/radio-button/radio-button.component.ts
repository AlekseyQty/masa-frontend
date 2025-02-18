import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mf-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent {
  @Input() selectionList: string[] = [];
  @Input() selectedValue: string = "";

  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();
  
  public radioId: string = "radio-list-" + Date.now().toString();

  public onselectionChange(): void {
    this.selectedValueChange.emit(this.selectedValue);
  }

}
