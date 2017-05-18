import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';

const routes = [
	// this acts similarly to Django pointing to specific apps and their classes in the views
	{path: '', loadChildren: 'app/components/home/home.module'},
	{path: 'contacts', loadChildren: 'app/components/contacts/contacts.module'}
]

export default RouterModule.forRoot(routes);
