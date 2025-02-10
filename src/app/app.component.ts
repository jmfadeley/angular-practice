import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header.component';
import { SliderAlpha } from './components/slider-alpha/slider-alpha.component';
import { SliderBeta } from './components/slider-beta/slider-beta.component';
import { TextField } from './components/text-field/text-field.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SliderAlpha, SliderBeta, TextField],
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
