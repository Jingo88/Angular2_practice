// this is a presentational component
// it holds no logic
// takes an input and just shows it to the user

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-clock',
  // templateUrl: './clock.component.html',
  template:`
		<h3>{{time | date:"medium"}}</h3>
  `,
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent{

	@Input() time;

}
