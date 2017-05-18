import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import appRoutes from "./app.routes";

// import { HomeComponent } from './components/home/home.component';
// import { ContactsComponent } from './components/contacts/contacts.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { ContactComponent } from './components/contact/contact.component';

// const routes = [
//   {path: '', component: HomeComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ContactsComponent,
    NavBarComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(routes)
    appRoutes
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
