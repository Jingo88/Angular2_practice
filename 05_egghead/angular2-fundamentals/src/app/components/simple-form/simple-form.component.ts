import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
// don't need the import because we injected mail in the constructor
// import { MailService } from '../mail.service';

@Component({
  selector: 'app-simple-form',
  // template: `
  //   <p>
  //     simple-form Works!
  //   </p>
  // `,
  templateUrl: './simple-form.component.html',
  styles: [`
    input:focus{
      outline: none
    }
    .mousedown{
      border: 2px solid red
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() thing;

  @Output() update = new EventEmitter();

  constructor(@Inject('hello') private hello){

  }
  // constructor(
  //   @Inject('mail') private mail,
  //   @Inject('topGun') private topGun, 
  // ){}

  ngOnInit() {
  }

  // onClick(value){
    // console.log("clicked");
    // console.log(this);
    // console.log(value)
    // console.log(this.mail.caseUpLow(value))
    // console.log(this.topGun);
  // }

  onMouseClick(e){
    console.log("mouse event")
    console.log(e)
    console.log(e.target)
  }

}
