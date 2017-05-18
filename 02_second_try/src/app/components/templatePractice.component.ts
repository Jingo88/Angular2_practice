import {Component} from '@angular/core';

@Component({
	selector: 'temp-practice',
	template: `
		<h1 *ngIf="showHeading">Angular 2 Template Practice</h1>
		<span [ngSwitch]="name">
			<span *ngSwitchCase="'X-23'">X-23</span>
			<span *ngSwitchCase="'Storm'">Storm</span>
			<span *ngSwitchCase="'Summer'">Summer</span>
			<span *ngSwitchDefault>Not Here</span>
		</span>
		<br>
		<ul>
			<li *ngFor="let color of colors">
				{{color}}
			</li>
		</ul>
		`,
})

export class TempPracticeComponent{
	private showHeading;
	private name;
	private colors;

	constructor(){
		this.showHeading = true;
		this.name = "X-23";
		this.colors = ["red", "Blue", "Green"];
	}
}