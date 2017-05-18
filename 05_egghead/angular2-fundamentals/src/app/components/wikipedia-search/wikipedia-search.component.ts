import { Component} from '@angular/core';
import { WikipediaSearchService } from '../../services/wikipedia-search.service';
// A Subject is a Observable we can subscribe to.
// We can also emit notifications on it
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// built in debouncer
import 'rxjs/add/operator/debounceTime';

// built in value checker. 
// Checks if values in input are different between debounce times
// to prevent unnecessary actions being called
import 'rxjs/add/operator/distinctUntilChanged';

// map to another observable. 
// we can use flat map from the "mergeMap" operator
// This will automatically subscribes to inner observables that were map and flatten them into one Observable of the same type
// import 'rxjs/add/operator/mergeMap';

// Changed to switchMap
// This will help out of order responses
// As you search a previous search may come back later than a more recent search
// showing different results to the user
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.scss']
})

export class WikipediaSearchComponent{

  items: Array<string>;

  // $ after variable name indicate a variable is an Observable
  term$ = new Subject<string>();

  constructor(private service:WikipediaSearchService) { 
     this.service.search(this.term$)
                 .subscribe(results => this.items = results);

    // Moved much of this to the service
    // this.term$
    //     .debounceTime(400)
    //     .distinctUntilChanged()
    //     .switchMap(term=> this.service.search(term))
    //     .subscribe(results => this.items = results);
  }
// This map returns another Observable
// We still have two subscribe calls going on        
  //       .map(term => this.service.search(term))        
  //       .subscribe(obsResults => {
  //         obsResults.subscribe(results => this.items = results);
  //       });
  // }

}






// Below is two subscribe calls. 
// Above we make our code Dryer but including a mergemap operator

// export class WikipediaSearchComponent{

// 	items: Array<string>;

// 	// $ after variable name indicate a variable is an Observable
// 	term$ = new Subject<string>();

//   constructor(private service:WikipediaSearchService) { 
//   	this.term$
//         .debounceTime(400)
//         .distinctUntilChanged()
//         .subscribe((term) => this.search(term));
//   }

//   search(term: string){
//   	// Observable?
//   	this.service.search(term)
//   							.subscribe(results => this.items = results);
//   }
// }
