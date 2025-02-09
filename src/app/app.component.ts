import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header.component';
import { SliderAlpha } from './components/slider-alpha/slider-alpha.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SliderAlpha],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';

  parentValue: number = 80;
  updateParentValue(input: number): void {
    this.parentValue = input;
    console.log(`parentValue updated to: ${this.parentValue}.`);
  }
}
