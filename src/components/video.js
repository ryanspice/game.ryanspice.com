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
	border-radius: 7px;
	font-size: 1.015em;
	width: 95vw;
	margin-left: 0px;
	position: relative; left: 6px; margin:0px auto; 
	border-bottom-left-radius: 0px !important; border-bottom-right-radius: 0px !important;`;

	innerHTML: string = `
		<source src="https://ryanspice.com/R6.1/videos/video_SnowBoarding.mp4" type="video/mp4">
			Your browser does not support the video tag.
	`;
	mounted = function(e){
		this.setAttribute('controls','');
	}
}

export default new Video();
