//@flow

import {
	AsyncView
} from "../entry";

class Maps extends AsyncView {

	type: string = 'div';
	id: string = "maps";
	renderTo: string = `#games`;
	sequence: number = 6;
	innerHTML = ``
	style = `max-width:1080px; margin:0px auto; display:block; height:200px;`
}

export default new Maps();
