import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

// BehaviorSubject will take the same thing as "startWith" below
// BehaviorSubject will start with a value
// Now these values are declared at the beginning
	contact$ = new BehaviorSubject({name: "Loading", image: ''});
	// Below we have a stream that is observing this contact$
	// as the stream gets new values that contact$ will get the values

	constructor(
		private route: ActivatedRoute,
		private http: Http
	){
		const api = "http://localhost:3000/";

		// Not needed because we subscribe below
		// this.contact = route.params
		route.params
								.map((p:any)=>p.id)
								.switchMap((id)=> http.get(`${api}people/${id}`)
										.map((res)=>res.json())
										.map((contact) => Object.assign({}, contact, {image: api+contact.image}))
								)
								// we are manually subscribing to this stream
								// the Observer of this stream is going to be this.contact
								.subscribe(this.contact$);
	}


// The startWith here will have our code make two separate requests to the id
// The Async Pipe is subscribing to the stream every time it is called
// Because of this it is making the http.get request twice



	// contact$;
	// id;

  // constructor(
  // 	private route: ActivatedRoute,
  // 	private http: Http
  // ) {
		// // this.id = route.params.map((p:any) => p.id);

		// const api = "http://localhost:3000/"
  // 	// we have to wait for the response from http. 
  // 	// we can take measures to make sure we don't render things until the response comes back
  // 	this.contact$ = route.params
  // 												.map((p:any) => p.id)
  // 												.switchMap((id)=> http.get(`${api}people/${id}`)
  // 														.map((res)=>res.json())
  // 														// We are changing the value of the image key in the Contact object
  // 														.map((contact) => Object.assign({}, contact, {image: api + contact.image}))
  // 												)
  // 												// this will render "Loading" in the place of name while we wait for the http.get()
  // 												// With this we can remove the null guard (?) in the html
  // 												.startWith({name: "Loading", image: ''})
  // }



}
