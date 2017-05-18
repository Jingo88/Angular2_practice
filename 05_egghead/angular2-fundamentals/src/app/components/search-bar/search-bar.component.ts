import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	title: String;
	success: String;
	movies: Array<number>;

  constructor(@Inject('omdb') private omdb) { }

  ngOnInit() {
  }

  onMultiSearch(e){
  	e.preventDefault();
  	console.log(e)
  	console.log(this.title);
  	let results = this.omdb.findAllMovies(this.title);
  	console.log("INSIDE SEARCH BAR MULTI SEARCH")
  	console.log(results);
  	// let newblah = results.map(res => res.json())
  	// let newblah = results.subscribe(data=>{
  	// 	const {_body, status } = data;

  	// 	console.log(data)
  	// 	console.log(_body)
  	// 	console.log(typeof _body)
  	// 	console.log(_body.json())
  	// 	console.log(typeof _body)
  	// 	console.log(_body["Response"])
  	// 	console.log(Object.keys(_body))
  	// 	console.log(_body["Error"])
  	// 	console.log(status)

  	// 	return data
  	// })
  	// console.log(newblah)
  }

}
