// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'tic-tac-toe';

// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Welcome to My Angular App!</h1>
  //   <app-example></app-example>
  // `,
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, BoardComponent]
})
export class AppComponent { }

