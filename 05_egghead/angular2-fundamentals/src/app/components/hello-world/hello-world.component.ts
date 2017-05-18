import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/withLatestFrom";
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { HOUR_UP, SECOND_UP, SECOND_DOWN, ADVANCE, RECALL } from '../../../reducers';
import { ClockComponent } from '../clock/clock.component';

interface AppState{
	clock: number;
}

@Component({
  selector: 'app-hello-world',
  // templateUrl: './hello-world.component.html',
  // <h1>{{clock | async | date:'medium'}}</h1>
  template:`
  	<input #inputNum type="number" value="0">
  	<button class="button" (click)="click$.next(inputNum.value)">Increase Hour</button>
  	<button class="button" (click)="decrease()">Decrease Seconds</button>
		<app-clock [time]="time | async"></app-clock>

		<div (click) = "person$.next(person)" *ngFor="let person of people | async">
			{{person.name}} is in {{person.time | date:"jms"}}
		</div>
		<button (click)="recall$.next()">RECALL!!!</button>
  `,
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent{

	// AA DOLLAR SIGN after a variable name is used to indicate that this variable is an OBSERVABLE

	// Observable we get back is an object
	// it pushes out values asynchronously. 
	// we can use the pipe async 
	// Async in the template is calling a subscribe on the observable and rendering it to the template
	// clock = Observable.interval(1000);

	// Making a date
	// add a date pipe "MM/dd/yy" | "fullDate" | "shortDate" | "medium"
	// clock = Observable
	// 					.interval(1000)
	// 					.map(()=> new Date());

	// Going to make a Subject
	// Subject allows us to call "next" every time we click
	// Next will push the stream forward one tick
	// mapTo a value to the subject on declaration
	// click$ = new Subject().mapTo({type:HOUR_UP, payload:4});

	// take a value from input
	// the value passed in is from the click event in template
	click$ = new Subject()
							.map((value)=>({
								type: HOUR_UP,
								payload: value
							})
							);	
	seconds$ = Observable
							.interval(1000)
							.mapTo({type:SECOND_UP, payload: 1});
	
	person$ = new Subject().map((value)=>({type: ADVANCE, payload: value}))

	recall$ = new Subject()
	time;
	people;

  constructor(private store: Store<AppState>){
  	// subscribe to the observable and console long the results
  	// this.clock.subscribe(console.log.bind(console));

  	// Use a "Subject" to be able to update the clock data
  	// this.clock = this.click$.map(() => new Date());

  	// Use the .merge import to update the clock on click AND have it auto update every 5 seconds
  	// this.clock = Observable.merge(
  	// 								this.click$,
  	// 								Observable.interval(5000)
  	// 						).map(()=> new Date());

  	// Make more control of the clock. 
  	// Track a date and make changes to that date
  	// To track something in RXJS think about "Start With" an initial Value
  	// Every time an event comes through you will check for it and change it
  	// this.clock = Observable.merge(
  	// 					this.click$,
  	// 					Observable.interval(1000)
  	// 				)
  	// 				.startWith(new Date())
  	// 				.scan((acc:Date,curr)=> {
  	// 					const date = new Date(acc.getTime());

  	// 					date.setSeconds(date.getSeconds() + 1);

  	// 					return date;
  	// 				});    

  	// Make clock update different between seconds and hours
  	// second or hour is now what is passed to "curr"
  	// this doesn't work. mapTo does not recognize the new Date object as something that can be assigned the strings
  	// this.clock = Observable.merge(
  	// 						this.click$.mapTo('hour'),
  	// 						Observable.interval(1000).mapTo('second')
  	// 					)
  	// 						.startWith(new Date())
  	// 						.scan((acc:Date, curr) => {
  	// 							const date = new Date(acc.getTime())

  	// 							if (curr === 'second'){
  	// 								date.setSeconds(date.getSeconds() + 1)
  	// 							} 
  	// 							if (curr === 'hour'){
  	// 								date.setHours(date.getHours() + 1)
  	// 							}
  	// 							return date;
  	// 						})


  	// Using reducers and a store
  	// this.clock = store.select('clock');
  	// Observable.merge(
  	// 		this.click$.mapTo({type: HOUR_UP, payload: 1}),
  	// 		Observable.interval(1000).mapTo({type: SECOND_UP, payload: 1})
  	// 	)
  			// ES6 allows us to just pass type and the key value will be the same {type:type}
  			// .subscribe((type)=>{
  			// 	store.dispatch({type, payload: 1})
  			// })
  			// ES5 is below
  			// .subscribe((type)=>{
  			// 	store.dispatch({type: type})
  			// })
  			// Whole action here
  			// .subscribe((action)=>{
  			// 	store.dispatch(action)
  			// })


  	// Creating a clock that can take input from templates
  	this.time = store.select('clock');
  	this.people = store.select('people');

  	// underscore in the parameters means we're not using that argument
  	// "WithLatest From" first argument will be latest value from "this.recall" 
  	// and second argument will be latest value from this.time
  	Observable.merge(
  		this.click$,
  		this.seconds$,
  		this.person$,
  		this.recall$
  				.withLatestFrom(this.time, (_,y)=> y)
  				.map((time)=>({type: RECALL, payload: time}))
  		).subscribe(store.dispatch.bind(store))
  }

  decrease(){
  	this.store.dispatch({type:SECOND_DOWN, payload: 8})
  }

}









