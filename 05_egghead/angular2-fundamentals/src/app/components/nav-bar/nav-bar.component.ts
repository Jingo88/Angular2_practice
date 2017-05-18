import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	@Output() titleSearch = new EventEmitter();

	title: String;

  constructor(
  	@Inject('omdb') private omdb 
  ){}

  ngOnInit() {
  }

  onMultiSearch(e){
  	e.preventDefault();

  	console.log("We are in multi search")
  	console.log(e)
  	console.log(this.title);
  	let results = this.omdb.defaultState;
  	// console.log(results)
  	if (this.title !== ""){
  		this.titleSearch.emit(results)	
  	}  	
  }
}
