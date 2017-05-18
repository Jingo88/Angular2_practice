// this is an example for factory providers 
// it is being imported into the dependency-injection.component

import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable()
export class DebugExampleService {

	// on instantiation this service is asking for a boolean to be passed in
	constructor(
		// now that we are including another service we need to pass DebugExampleService another argument
		private consoleService: ConsoleService,
		private enabled: boolean
	){}

	debug(message){
		if (this.enabled){
			this.consoleService.log(`DEBUG: ${message}`);
		}
	}
}
