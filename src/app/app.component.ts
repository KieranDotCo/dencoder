import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dencoder = {
    original: '',
    tab: 'decoded',
    decoded: '',
    encoded: ''
  };

  setActiveTab(tab: string) {
    this.dencoder.tab = tab;
  }

}
