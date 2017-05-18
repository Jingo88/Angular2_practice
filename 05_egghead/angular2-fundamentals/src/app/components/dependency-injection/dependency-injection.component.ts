import { Component, OnInit, Inject } from '@angular/core';
// import { EngineComponent } from '../engine/engine.component'; // Component not a service
// import { EngineService } from '../../services/engine.service'; // Deleted
import { TurtlesService } from '../../services/turtles.service';
import { DebugExampleService } from '../../services/debug-example.service';
import { ConsoleService } from '../../services/console.service';

// Services hold business logic to be reused in multiple components throughout an application

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  // providers: [EngineComponent]
  // providers: [{provide:'engine', useClass:EngineComponent}]
  // providers: [EngineService]
  providers: [
  	TurtlesService,
  	ConsoleService,
  	{
  		provide: DebugExampleService,
  		useFactory: (consoleService) => {
  			return new DebugExampleService(consoleService, true) // we can pass in true or false to the service instance
  		}, 
		// to get an instance of the consoleService in the factory function	
  	// this is a list of provider tokens that map to the dependencies we want to inject
  	// now we get to inject consoleService into the factory function above
  		deps:[ConsoleService]
  	},
  	// {
  	// 	provide: 'apiUrl',
  	// 	useValue: "http://localhost:4200/apiUrl"
  	// }  	
  ]
})
// Providers tell the component to make an instance of the class we imported. 



// Dependency Injection means all instances of needed objects are passed to the objects constructor
export class DependencyInjectionComponent implements OnInit{

	// inject Engine Component in the TypeScript Way
  // constructor(private engine: EngineComponent) { }

  // Can also use import the Inject decorator from angular/core
  // Must set up the providers properly
  // constructor(@Inject('engine') private engine){}

  // importing a service
  // constructor(private engine: EngineService){}

  turtlesArr:Array<any>;

  constructor(
  	// private debugExample : DebugExampleService,
  	private turtles: TurtlesService
  ){}

  ngOnInit() {
  	// this.startEngine();
  	this.turtlesArr = this.turtles.getTurtles(); 
  	// this.debugExample.debug("Getting Items..."); // move this inside of debugExample
  }

  // startEngine(){
  // 	this.engine.start();
  // }
}
