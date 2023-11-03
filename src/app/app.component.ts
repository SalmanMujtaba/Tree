import { Component } from '@angular/core';

@Component({
  selector: 'atl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-structure';

  date: number;

  constructor() {
    this.date = Date.now();
  }
}
