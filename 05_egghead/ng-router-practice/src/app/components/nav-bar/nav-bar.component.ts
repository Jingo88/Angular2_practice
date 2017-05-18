import { Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{

  navs = [
  	{url: "", content: "Home"},
  	{url: "contacts", content: "Contacts"},
  	{url: "contacts/1", content: "One"}
  ];
}
