//@flow

import {
	AsyncView
} from "../entry";

class Video extends AsyncView {

	type: string = 'section';
	renderTo: string = `main`;
	sequence: number = 3;
	className:string = ``;
	style:string = `

	-webkit-box-shadow:0 0 2px 1px rgba(25,25,25, 0.75);
	-moz-box-shadow:0 0 2px 1px rgba(25,25,25, 0.75);
	box-shadow:0 0 2px 1px rgba(25,25,25, 0.75);

	border-top:0px;

	max-width:1024px;display:block;background: black; border-radius: 7px; font-size: 1.015em; width: 95vw; margin-left: 0px; position: relative; left: 6px; margin:0px auto; border-top-left-radius: 0px !important; border-top-right-radius: 0px !important;`;
	innerHTML: string = `
	<div class=" writeup" style="font-size: 1.239em; width: 98%; margin-left: 0px;">

					<p><a href="https://ryanspice.com/ReverenceLost/" style=" color:rgba(25,25,25, 0.75) !important;
	    -webkit-text-stroke-width: 1.5px;
	    -webkit-text-stroke-color:rgba(75,25,25,0.75);
	    -webkit-text-fill-color: rgba(75,25,25,0.75);text-outline: 2px rgba(75,25,25,0.75) !important;">

	                </a>
									<a href="https://ryanspice.com/ReverenceLost/" class="menulist border_nav" style="padding:1%;">Play Now</a>
									<a href="https://ryanspice.com/ReverenceLost/" class="menulist border_nav" style="padding:1%;">Source</a>
	                <a href="https://ryanspice.com/" class="menulist border_nav" style="padding:1%;float:right">RyanSpice.com</a>
	                    </p>
				</div>
	`;
	mounted = function(e){
		this.setAttribute('controls','');
	}
}

export default new Video();
