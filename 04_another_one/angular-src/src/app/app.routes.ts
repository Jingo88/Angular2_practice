import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes = [
	{path: '', loadChildren: 'app/component/home/home.component'},
]

export default RouterModule.forRoot(routes);