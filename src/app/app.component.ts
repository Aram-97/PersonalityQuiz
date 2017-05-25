import { Component } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  	<app-quiz></app-quiz>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent  { }
