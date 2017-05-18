import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { JsonpModule } from '@angular/http';

// reducers
import { clock, people } from '../reducers';

// services
import { MailService } from './services/mail.service';
import { HelloService } from './services/hello.service';
import { OmdbReqService } from './services/omdb-req.service';
import { WikipediaSearchService } from './services/wikipedia-search.service';

// components
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WidgetThreeComponent } from './components/widget-three/widget-three.component';
import { HomeComponent } from './components/home/home.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ClockComponent } from './components/clock/clock.component';
import { WikipediaSearchComponent } from './components/wikipedia-search/wikipedia-search.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { EngineComponent } from './components/engine/engine.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SearchBarComponent,
    MovieListComponent,
    NavBarComponent,
    WidgetThreeComponent,
    HomeComponent,
    HelloWorldComponent,
    ClockComponent,
    WikipediaSearchComponent,
    DependencyInjectionComponent,
    EngineComponent,
  ],
  // NG2 compiler compiles those components that have been declared with their tags inside of other components. If a component has been written but not used/invoked by their html tags then the ng2 compiler ignores it saving space in the bundle
  // However if we want to make some components appear dynamically later we can use "entry components"
  // This will tell ng2 not to ignore specific components b/c they will appear later
  entryComponents:[
    WidgetThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({clock, people}),
    JsonpModule
  ],
  providers: [
    {provide:'mail', useClass:MailService},
    {provide:'topGun', useValue: "http://www.omdbapi.com/?t=top+gun"},
    {provide:'hello', useClass: HelloService},
    {provide:'omdb', useClass: OmdbReqService},
    WikipediaSearchService,
    // EngineComponent
    // {provide: 'engine', useClass:EngineComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
