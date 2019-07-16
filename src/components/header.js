//@flow

import {
	V
} from "../entry";

class Header extends V {

	type: string = `header`;
	renderTo: string = `main`;
	style = `margin-top:45.25vh; `
	className = ``;
	mounted: any = function(){

		feather.replace();
	};

	innerHTML: string = `

		<span>
			<a href="https://github.com/ryanspice" target="_blank"><i data-feather="github"></i></a>
			<a href="https://twitter.com/ryanspice?lang=en" target="_blank"><i data-feather="twitter" ></i></a>
			<a href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank"><i data-feather="linkedin" ></i></a>
		</span>

		<h2 >game.ryanspice.com${
			window.location.href.split('=')[1]?(" / " + String(window.location.href.split('=')[1]).toLowerCase()):''
			}</h2>

		<ul>

			<li>

				<a href="https://ryanspice.com/game"> games </a>

			  <div class="dropdown-content acrylic">
				<h5><a style="color:white;" href="?game=SnowBoarding" />SnowBoarding</a></h5>
				<h5><a style="color:white;" href="?game=ReverenceLost" />ReverenceLost</a></h5>
				<h5><a style="color:white;" href="?game=FlappyFish" />FlappyFish</a></h5>
				<h5><a style="color:white;" href="?game=KongQuest" />KongQuest</a></h5>
				<h5><a style="color:white;" href="?game=Bovxel" />Bovxel</a></h5>
<!--
				<h5><a href="?game=Fabagohey" />Fabagohey</a></h5>

					<h5><a href="?game=Dodgeball" />Dodgeball</a></h5>
					-->
			  </div>

			</li>


			<li>

				<a href="https://ryanspice.com/"> home </a>

			</li>

		</ul>

	`;

};

export default new Header();
