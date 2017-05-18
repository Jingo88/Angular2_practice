import { 
	Component, 
	ViewChild, 
	ViewContainerRef, 
	ComponentFactoryResolver 
} from '@angular/core';
import { WidgetThreeComponent } from "../widget-three/widget-three.component";

// <ng-template> is not going to be rendered by the DOM. It is some HTML that you will write declaratively and then you can reference that
// Use a let statement to pass in values in the form of "context" for the template tag for create embedded

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template:`
  	<div #container>
			<h4>These components were created by a widget Factory!</h4>
			<button class = "button" (click)="onClick()">Move Component</button>
			<button class = "button" (click)="onCreateClick()">Create a Template!</button>
  	</div>

  	<ng-template #template let-description = "description">
			<h2> A COOL {{description}} TAG</h2>
			<button class='button'>A {{description}} BUTTON</button>
  	</ng-template>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
	// will make container a View Container Ref instead of an Element Ref
	@ViewChild('container', {read:ViewContainerRef}) container;

	@ViewChild('template') template;

	// declaring widgetRef as an instance variable to move things around
	widgetRef;

	constructor(private resolver: ComponentFactoryResolver){};

  ngAfterContentInit(){
  	// normally would show as Element Ref but we changed it to ViewContainerRef up in the Decorator
  	console.log(this.container);
  	// We are able to get WidgetThree here because although it's html tag is not declared in any html we put it in the entryComponents inside the app.module.ts
  	const widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent)
  	// createComponent takes a component factory
  	// We can get component factories by injecting them in the component factory resolver service
  	// Each widget Factory will create a new instance of this component
  	this.container.createComponent(widgetFactory)
  	this.container.createComponent(widgetFactory)
  	this.container.createComponent(widgetFactory)
  	this.container.createComponent(widgetFactory)
  	this.container.createComponent(widgetFactory)
  	this.container.createComponent(widgetFactory).instance.message = "Chaining Methods"
  	
  	this.widgetRef = this.container.createComponent(widgetFactory);
		this.widgetRef.instance.message = "I'm Last!!!";
  	
  	// pass in an integer as a second argument to "createComponent" to help control the order of components
  	this.container.createComponent(widgetFactory, 1).instance.message = "I'm Second!!!"
  }

  onClick(){
  	// add a new instance of widget three at the top of the list
  	// const widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent);

  	// const widgetRef = this.container.createComponent(widgetFactory, 0);
  	// widgetRef.instance.message = "I'm NUMBER ONE!!";

  	// target the container. Using the move method we are going to move the view of the widget
  	// create a random number generator to move the widgetRef around
  	const randomIdx = Math.floor(Math.random() * this.container.length);
  	this.container.move(this.widgetRef.hostView, randomIdx);

  	// Can also detach a targeted element by the index
  	// this.container.detach(2)
  }

  onCreateClick(){
  	//createEmbeddedView takes a second parameter "context" to give the template values
  	// this.container.createEmbeddedView(this.template, {description: "SWEET"});
  	const context = {
  		description: "SWEEEEET"
  	}
  	this.container.createEmbeddedView(this.template, context);
  }

}





