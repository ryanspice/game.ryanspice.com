//@flow

import {
	AsyncView
} from "../entry";

class Pane extends AsyncView {

	type: string = 'section';
	renderTo: string = `main`;
	sequence: number = 3;
	className: string = `pane`;
	style: string = `max-width:975px;display:block;background: black; border-radius: 7px; font-size: 1.015em; width: 50vw; margin-left: 0px; position: relative; left: -3px; margin:0px auto;`;
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
