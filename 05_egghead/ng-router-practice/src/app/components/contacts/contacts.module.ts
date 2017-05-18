import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { ContactsComponent } from "./contacts.component";
import { ContactComponent } from '../contact/contact.component';
import contactsRoutes from "./contacts.routes";

@NgModule({
	imports : [CommonModule, contactsRoutes, HttpModule],
	declarations: [ContactsComponent, ContactComponent]
})

export default class ContactsModule{}
