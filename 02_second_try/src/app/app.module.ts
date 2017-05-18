import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MyComponent } from './components/my-component.component';
import { TempPracticeComponent } from './components/templatePractice.component';
import { PipePracticeComponent } from './components/pipePractice.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyComponent, TempPracticeComponent, PipePracticeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
