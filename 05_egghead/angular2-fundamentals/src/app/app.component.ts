import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  movies = [];
  
  showMovies: boolean;

  constructor(
    @Inject('mail') private mail,
    @Inject('topGun') private topGun, 
  ){
    this.showMovies = false;

  }

  onUpdate(id, text){
  	this.mail.update(id,text);
  }

  onClickShow(){
    this.showMovies = this.showMovies ? false : true;
  }

  onTitleSearch(results){
    console.log("we are in title search")
    console.log(results)
    this.movies = results;
    if (this.movies.length > 0){
      this.showMovies = this.showMovies ? false : true;  
    }
    
  }
  
}
