import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { RouterModule } from "@angular/router";
// import { NavBarComponent } from '../nav-bar/nav-bar.component';

import homeRoutes from './home.routes';

const routes = [
	{path: '', component: HomeComponent}
]

@NgModule({
	imports: [
		CommonModule, 
		// RouterModule.forChild(routes)
		homeRoutes
	],
	declarations: [
		HomeComponent,
		// NavBarComponent
	]
})
export default class HomeModule{}



// import {NgModule} from "@angular/core";
// import {CommonModule} from "@angular/common";
// import {HomeComponent} from "./home.component";
// import homeRoutes from "./home.routes";

// @NgModule({
//     imports:[CommonModule, homeRoutes],
//     declarations: [HomeComponent]
// })
// export default class HomeModule{}