//@flow

import {
	AsyncView
} from "../entry";

class Title extends AsyncView {

	type: string = 'h1';
	renderTo: string = `main`;
	sequence: number = 2;
	style:string = `color:white;width:100%;text-align:center;`;
	innerHTML: string = `
		SnowBoarding
	`;
}

export default new Title();
