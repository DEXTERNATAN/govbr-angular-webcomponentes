import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular WebComponentes teste';

  name = 'John Doe';
  isActive = false;
  isDisabled = false;
}
