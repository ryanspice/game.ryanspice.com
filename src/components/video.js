//@flow

import {
	AsyncView
} from "../entry";

class Video extends AsyncView {

	type: string = 'video';
	renderTo: string = `main`;
	sequence: number = 2;
	className:string = `vid1 border_nav pane`;
	style:string = `max-width:1024px;display:block;background: black; border-radius: 7px; font-size: 1.015em; width: 50vw; margin-left: 0px; position: relative; left: -3px; margin:0px auto;`;
	innerHTML: string = `
		<source src="https://ryanspice.com/R6.1/videos/video_SnowBoarding.mp4" type="video/mp4">
			Your browser does not support the video tag.
	`;
	mounted = function(e){
		console.log(this);
		this.setAttribute('controls','');
	}
}

export default new Video();
