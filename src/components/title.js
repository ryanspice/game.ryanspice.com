//@flow

import {
	AsyncView
} from "../entry";

class Title extends AsyncView {

	type: string = 'h1';
	renderTo: string = `main`;
	sequence: number = 2;
	className: string = ``
	style:string = `color:white;width:100%;text-align:center;height:23vh;`;
	innerHTML: string = `

	`;
}

export default new Title();
