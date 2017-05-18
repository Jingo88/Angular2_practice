import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OmdbReqService {

  multiSearch: String;
  singleSearch: String;

  defaultState = [
    {
      "Title": "The Princess Bride",
      "Year": "1987",
      "imdbID": "tt0093779",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"
    },
    {
      "Title": "As You Wish: The Story of 'The Princess Bride'",
      "Year": "2001",
      "imdbID": "tt0305245",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "The Princess Bride Game",
      "Year": "2008",
      "imdbID": "tt1268983",
      "Type": "game",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNDEwNzk1NzA4NF5BMl5BanBnXkFtZTgwMzI4MDMwMTE@._V1_SX300.jpg"
    },
    {
      "Title": "Barbie Princess Bride",
      "Year": "2000",
      "imdbID": "tt0416500",
      "Type": "game",
      "Poster": "N/A"
    },
    {
      "Title": "The Princess Bride",
      "Year": "2012",
      "imdbID": "tt3189814",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "True Love: The Princess Bride Phenomenon",
      "Year": "2012",
      "imdbID": "tt3834590",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "UFO Princess Valkyrie: Bride Training Boot Camp",
      "Year": "2006",
      "imdbID": "tt4143538",
      "Type": "movie",
      "Poster": "N/A"
    }
  ];

  constructor(private http:Http) {
    this.multiSearch = "http://www.omdbapi.com/?s=";
    this.singleSearch = "http://www.omdbapi.com/?t=";
  }

  convert(title){
  	let titleArr = title.split(" ");
  	return titleArr.join("+");
  } 

  findAllMovies(title){
  	if (title.split(" ").length > 1){
  		title = this.convert(title);
  	}
  	let endpoint = `${this.multiSearch}${title}`;
  	console.log(endpoint)
  	let results = this.http.get(`${this.multiSearch}${title}`);
  	console.log(results)
  	return results
  }

}
