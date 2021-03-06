import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-shopping-app';
  loadedfeature = 'shopping-list';

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
