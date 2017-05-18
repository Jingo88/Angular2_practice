// Example for dependency injection
// export this to inject it into the dependency-injection component
import { Component } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent {

  constructor() { }

  start(){
  	console.log("START YOUR ENGINES!!!")
  }

}
