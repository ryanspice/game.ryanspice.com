//@flow

import {
	AsyncView
} from "../entry";

class Pane extends AsyncView {

	type: string = 'section';
	renderTo: string = `main`;
	sequence: number = 3;
	className: string = `pane`;
	constructor(data) {
		super();
		this.innerHTML = data.text;
		this.mounted = data.mounted;
	}
}

export default [
	new Pane({
		text:`<h2>details</h2>`,
		mounted:function(){

			if (!sessionStorage.getItem('game-ttl'))
				return;

			const data = JSON.parse(sessionStorage.getItem('game'));

			this.innerHTML = `
				${data.info[0]}
				${data.info[1]}
				${data.info[2]}
				${data.info[3]}
			`;
		}
	}),
	new Pane({
		text:`<img class="galleryImg" src="" style="position: relative; opacity: 1.07149;">`,
		mounted:function(){

			if (!sessionStorage.getItem('game-ttl'))
				return;

			const data = JSON.parse(sessionStorage.getItem('game'));

			this.innerHTML = `
				<img src='${data.images[0]}' />
				<img src='${data.images[1]}' />
				<img src='${data.images[2]}' />
				<img src='${data.images[3]}' />
			`;
		}
	})
];
