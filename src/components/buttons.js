//@flow

import {
	AsyncView
} from "../entry";

class Buttons extends AsyncView {

	type: string = 'section';
	renderTo: string = `main`;
	sequence: number = 3;
	className:string = `theme`;

	style:string = `-webkit-box-shadow: 0 0 2px 1px rgba(25,25,25, 0.75);
	-moz-box-shadow: 0 0 2px 1px rgba(25,25,25, 0.75);
	box-shadow: 0 0 2px 1px rgba(25,25,25, 0.75);
	border-top: 0;
	max-width: 1024px;
	display: block;
	background: black;
	border-radius: 7px;
	font-size: 1.015em;
	width: 95vw;
	margin-left: 0;
	position: relative;
	left: 6px;
	margin: 0 auto;
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;`;

	innerHTML: string = `
	<div class=" writeup" style="font-size: 1.239em; width: 98%; margin-left: 0px;">

		<p><a id ="play" href="" style=" 
			-webkit-text-stroke-width: 1.5px;
			-webkit-text-stroke-color:rgba(75,25,25,0.75);
			-webkit-text-fill-color: rgba(75,25,25,0.75);text-outline: 2px rgba(75,25,25,0.75) !important;">

			</a>
			<a id ="bplay" href="" class="menulist border_nav" style="padding:1%;">Play Now</a>
			<a id ="bsource" href="" class="menulist border_nav" style="padding:1%;">Source</a>
			<a href="https://ryanspice.com/" class="menulist border_nav" style="padding:1%;float:right">RyanSpice.com</a>
		</p>
	</div>
	`;
	mounted = function(e){
		this.style = "border-top-style: none;";

		const data = sessionStorage.getObject('game').data;
		document.getElementById('bplay').href = data.buttons.play;

		if (data.buttons.source="")
			document.getElementById('bsource').href = data.buttons.source;
		else
			document.getElementById('bsource').remove();
	}
}

export default new Buttons();
