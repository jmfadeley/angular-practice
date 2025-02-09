import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header.component';
import { Slider } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Slider],
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
