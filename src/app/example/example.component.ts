// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-example',
//   standalone: true,
//   imports: [],
//   templateUrl: './example.component.html',
//   styleUrl: './example.component.scss'
// })
// export class ExampleComponent {

// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styles: ['button { width: 100px; height: 100px; font-size: 5em !important; }'],
  imports: [CommonModule],
  standalone: true
})
export class ExampleComponent {
  // title = 'Hello from Example Component!';

  // changeTitle() {
  //   this.title = 'Title Changed!';
  // }

  // rando = Math.random();
  @Input() value: string; //marked this as optional dunno if this is right
}
