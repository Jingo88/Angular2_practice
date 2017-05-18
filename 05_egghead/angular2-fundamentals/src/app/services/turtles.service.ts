import { Injectable, Inject } from '@angular/core';
import { DebugExampleService } from './debug-example.service';
// import { Http } from '@angular/http';

// TypeScript doesn't not compile with meta data for these dependencies unless it has a decorator
// The debugexampleservice was able to work in dependency injection because there was already a component decorator
// Inside of this service we imported the Injectable decorator for this reason
// So when TypeScript compiles it will include the metadata needed to recognize these dependencies
@Injectable()
export class TurtlesService {

	constructor(private debugExample: DebugExampleService){}

  turtles:Array<any> = [
  	{name: "Raphael", color: "Red", weapon: "Sais"},
  	{name: "Leonardo", color: "Blue", weapon: "Katanas"},
  	{name: "Donatello", color: "Purple", weapon: "Bo Staff"},
  	{name: "Michaelangelo", color: "Orange", weapon: "Nunchakus"}
  ]

  getTurtles(){
  	this.debugExample.debug("Acquiring The Turtles") // will not work without adding a decorator. We added Injectable()
  	return this.turtles;
  }



// Example of making a value provider in the over arching component
// the apiUrl will come from the dependency-injection component
  // apiUrl = 'http://localhost:4200/api';
// instead of creating the apiUrl
// we're going to create it in the component so we can Inject it anywhere we need

  // constructor(
  // 	private debugExample: DebugExampleService,
  // 	private http: Http,
  // 	// Inject takes any token, not just strings
  // 	@Inject('apiUrl') private apiUrl
  // ){}

  // getTurtles(){
  // 	this.debugExample.debug("Acquiring The Turtles");
  // 	return this.http.get(`${this.apiUrl}/turtles`)
  // 									.map(res => res.json())
  // 									.map(data=> data.turtles);
  // }
}
