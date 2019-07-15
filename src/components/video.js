//@flow

import {
	AsyncView
} from "../entry";

class Video extends AsyncView {

	type: string = 'video';
	renderTo: string = `main`;
	sequence: number = 2;
	className:string = `vid1 border_nav pane`;
	style:string = `
	max-width:1080px;
	display:block;
	background: black;
	font-size: 1.015em;
	width: 95vw;
	margin-left: 0px;
	position: relative; left: 6px; margin:0px auto;
	border-bottom-left-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
	`;

	mounted = function(e){

		if (!sessionStorage.getItem('game-ttl'))
			return;

	const data = sessionStorage.getObject('game').data;

		this.innerHTML = `
			<source src='${data.video}' type="video/mp4">
				Your browser does not support the video tag.
		`;

		this.setAttribute('controls','');
		this.setAttribute('muted','');
		this.muted = true;

	}
}

export default new Video();
