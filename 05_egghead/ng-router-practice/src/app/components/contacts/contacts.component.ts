import { Component, OnInit } from '@angular/core';
// INSIDE the 05_egghead folder we cloned a star wars file from John Lindquist
// start the server with npm start. It is running on port 3000
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent{

	contacts$;

  constructor(private http:Http) {
  	this.contacts$ = http.get("http://localhost:3000/people")
  				.map((res) => res.json());
  }

}
