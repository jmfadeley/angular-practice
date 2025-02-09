import { Component, computed, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'slider-alpha',
  templateUrl: './slider-alpha.component.html',
  styleUrl: './slider-alpha.component.scss'
})

/* This is approach Alpha.
For the parent:
Inputs come in from parent, emits call to parent to update. 
The TS compiler throws crap because $event.target.value can be null, but there's an okay workaround.

For the child:
Try as I might, it doesn't look like TS takes the event gracefully and it must be broken down and cast.
*/
export class SliderAlpha {
  @Input() parentValue: number = 0; // Default overriden by parent component.
  @Output() updateParentValue: EventEmitter<number> = new EventEmitter<number>();

  onParentSliderChange(event: Event) : void {
    const newValue = (event.target as HTMLInputElement).value;
    this.parentValue = parseInt(newValue) || 0;
    this.updateParentValue.emit(this.parentValue);
  }

  childValue: number = 16;
  onChildSliderChange(event: Event) : void {
      this.childValue = parseInt((<HTMLInputElement>event.target).value) || 0; 
      console.log(`childValue updated to: ${this.childValue}.`);
  }
}