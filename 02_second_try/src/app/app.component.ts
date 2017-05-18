import { Component } from '@angular/core';
import { MyComponent } from './components/my-component.component';
import { TempPracticeComponent } from './components/templatePractice.component';
import { PipePracticeComponent } from './components/pipePractice.component';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Hello {{name}}</h1>
  	<pipe-practice></pipe-practice>
  	<hr/>
  	<temp-practice></temp-practice>
  	<hr/>
  	<my-component></my-component>  	
  	`,
  directives: [MyComponent, TempPracticeComponent]
})

export class AppComponent{ name = 'James Howlett'; }
