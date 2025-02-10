import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'slider-beta',
  templateUrl: './slider-beta.component.html',
  styleUrl: './slider-beta.component.scss'
})

/* This is approach Beta.
No matter what, values altered externally need to have signals built around them. 
It also needs a function to reflect the results.

Two-way data binding can alleviate some of the cruft, but not much. The change has to be 
emitted.
*/
export class SliderBeta {

  @Input() oneWayValue: number = 72;

  onOneWayValueChange(event: Event): void {
    this.oneWayValue = parseInt((<HTMLInputElement> event.target).value);
    console.log(this.oneWayValue);
  }

  // Approach B. Note that without [(subject)] or [subject], the changes aren't felt on the slider in the template.
  // It seems you may need ngModel to really use two way binding effectively.
  @Input() twoWayValue!: number | string; // ! means it can be blank. Not desirable behavior but worth noting.
  @Output() twoWayValueChange = new EventEmitter<number>();

  onTwoWayValueChange(event: Event): void {
    this.twoWayValue = parseInt((<HTMLInputElement> event.target).value);
    this.twoWayValueChange.emit(this.twoWayValue);
    console.log(this.twoWayValue);
  }

}