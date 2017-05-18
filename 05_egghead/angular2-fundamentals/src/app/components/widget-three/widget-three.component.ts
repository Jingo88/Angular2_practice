// This widget auto focuses on the input box when the page is loaded

import { Component, ViewChild, Renderer, Input } from '@angular/core';

@Component({
  selector: 'app-widget-three',
  // templateUrl: './widget-three.component.html',
  template: `
		<input #input type="text" [value] = "message">
  `,
  styleUrls: ['./widget-three.component.scss']
})

// Commented out is how component is made with angular-cli ng generate component
// export class WidgetThreeComponent implements OnInit {
export class WidgetThreeComponent{
	@ViewChild('input') input;

  @Input() message = "Enter Something!"

  constructor(private renderer:Renderer){ }

  ngAfterViewInit(){
  	this.renderer.invokeElementMethod(
  		this.input.nativeElement,
  		"focus"
  	)
  }
}
