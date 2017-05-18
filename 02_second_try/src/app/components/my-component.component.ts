import {Component} from '@angular/core';

@Component({
	selector: 'my-component',
	template: `
		<h1>My New Component {{title}}</h1>
		<img [src]='imageLink'/>
		<br/>
		<button (click)="runClick()">Click Me</button>
		<br/>
		<input type='text' [(ngModel)]="note" (keyup.enter)="saySomething($event)">
		{{note}}`,
})

export class MyComponent{
	private title;
	private imageLink;
	private note;

	constructor(){
		this.title = "Hello WALRD";
		this.imageLink = 'http://lorempixel.com/400/200';
		this.note;
	}

	runClick(){
		console.log('YOU CLICKED ME')
	}

	saySomething(e){
		console.log(e);
		console.log(e.target.value);
	}
}