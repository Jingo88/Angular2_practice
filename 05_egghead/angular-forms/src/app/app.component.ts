import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  
  // ng-invalid does not work in the scss file but works below as part of the styles
      styles:[`
.ng-invalid{
    border: 3px solid red;
}
.ng-valid{
    border: 3px solid green;
}
`],
})
export class AppComponent {
  @ViewChild('formRef') form;

  username = "Enter Name Here";
  movie = "Enter A Title";

  onSubmit(formValue){
  	console.log(formValue)
  }
}
