//@flow

import {
	AsyncView
} from "../entry";

class Pane extends AsyncView {

	type: string = 'section';
	renderTo: string = `main`;
	sequence: number = 3;
	className: string = `pane`;
	style: string = ``;
	innerHTML: string = ``;

	constructor(data) {
		super();
		this.innerHTML = data.text;
	}
}

export default [
	new Pane({
		text:`<h2>details</h2>`
	}),
	new Pane({
		text:`<img class="galleryImg" src="images/SnowBoarding/preview_SnowBoarding3.png" style="position: relative; opacity: 1.07149;">`
	})
];
