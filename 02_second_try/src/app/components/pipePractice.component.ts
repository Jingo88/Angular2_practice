import {Component, Pipe, PipeTransform} from '@angular/core';
import {FilterArrayPipe} from '../filter.pipe';

@Component({
	selector: 'pipe-practice',
	template: `
		<h1>Learning Some Pipes with {{name}}</h1>
		<h3>My Sidekick is {{sidekick | uppercase}} </h3>
		<h3>Robins Sidekick is {{robinkick | lowercase}}</h3>
		<h3> It's my birthday on {{birthday | date}} </h3>
		<h3> It's my birthday on {{birthday | date: 'shortDate'}} </h3>
		<h3> It's my birthday on {{birthday | date: 'longDate'}} </h3>
		<h3> It's my birthday on {{birthday | date: 'shortTime'}} </h3>
		<h3> I will help you for {{price | currency: 'USD'}} </h3>
		<h3> I will help you for {{price | currency: 'USD':"true"}} </h3>
		<h3> I will help you for {{price | currency: 'GBP':"true"}} </h3>
		<hr/>
		<h2>Now build your own custom shit</h2>
		<ul>
			<ul *ngFor="let hero of heroes">
				<li>{{hero.name}}</li>
				<li>{{hero.codeName}}</li>
			</ul>
		</ul>
		`,
	pipes: [FilterArrayPipe]
})

// could not get custom pipe filter to work. 
		// <input type="text" [(ngModel)] = "filterText">
		// <ul>
		// 	<ul *ngFor="let hero of heroes | filter: filterText">
		// 		<li>{{hero.name}}</li>
		// 		<li>{{hero.codeName}}</li>
		// 	</ul>
		// </ul>

export class PipePracticeComponent{
	private name;
	private sidekick;
	private robinkick;
	private birthday;
	private price;
	private heroes = [
			{
				"name" : "James Howlett",
				"codeName" : "Wolverine"
			},
			{
				"name" : "Kitty Pride",
				"codeName" : "ShadowCat"
			},
			{
				"name" : "Scott Summers",
				"codeName" : "Cyclops"
			},
			{
				"name" : "Ororo Munroe",
				"codeName" : "Storm"
			},
			{
				"name" : "Peter Rasputin",
				"codeName" : "Colossus"
			},
			{
				"name" : "Illyana Rasputin",
				"codeName" : "Magik"
			},
		];

	constructor(){
		this.name = "Michael Jordan";
		this.sidekick = "Robin";
		this.robinkick = "NightWing";
		this.birthday = new Date(1988, 29, 10);
		this.price = 8000; 
	}
}





