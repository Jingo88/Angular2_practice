import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	message = "Your Text Will Change Here!!!";
  favThings = [
    {id: 0, text: "My Girlfriend"},
    {id: 1, text: "Muay Thai"},
    {id: 2, text: "Programming"},
    {id: 3, text: "Whiskey"},
    {id: 4, text: "Movies"},
  ];

  constructor() { }

  update(id, text){

    this.favThings = this.favThings.map((thing) => {
      console.log(thing)
      console.log(id)
      console.log(text)
      console.log({id, text})
      return thing.id === id ? {id, text} : thing
    })
  }

  caseUpLow(str){
  	let strArr = str.split("");
  	let up = true;

  	let newStrArr = strArr.map((char)=>{
  		if (up === true){
  			up = false;
  			return char.toUpperCase();
  		} else {
  			up = true;
  			return char.toLowerCase();
  		}
  	})

  	this.message = newStrArr.join("");
  	return newStrArr.join("");
  }

}
