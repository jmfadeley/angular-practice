import { Component, computed, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class Slider {
  // Approach A: Inputs come in from parent, emits call to parent to update. 
  @Input() parentValue: number = 0; // Default overriden by parent component.
  @Output() updateParentValue: EventEmitter<number> = new EventEmitter<number>();

  // TS compiler throws crap because $event.target.value can be null. This is an approach to get around.
  onParentSliderChange(event: Event) : void {
    const newValue = (event.target as HTMLInputElement).value;
    this.parentValue = parseInt(newValue) || 0;
    this.updateParentValue.emit(this.parentValue);
  }

  // Approach B: 
}