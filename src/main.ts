import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SearchViewComponent } from './app/search-view/search-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchViewComponent
  ],
  template: `
    <app-search-view></app-search-view>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
