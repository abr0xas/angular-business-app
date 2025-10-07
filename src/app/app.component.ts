import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <h1>Angular Zoneless App</h1>
      <p>Counter: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    button {
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
}