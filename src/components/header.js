//@flow

import {
	V
} from "../entry";

class Header extends V {

	type: string = `header`;
	renderTo: string = `main`;
	style = `margin-top:1vh; `
	className = ``;
	mounted: any = () => {

		feather.replace();
	};

	innerHTML: string = `

		<span>
			<a href="https://github.com/ryanspice" target="_blank"><i data-feather="github"></i></a>
			<a href="https://twitter.com/ryanspice?lang=en" target="_blank"><i data-feather="twitter" ></i></a>
			<a href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank"><i data-feather="linkedin" ></i></a>
		</span>

		<h2 >game.ryanspice.com</h2>

		<ul>

			<li>

				<a href="https://ryanspice.com/"> home </a>

			</li>

		</ul>

	`;

};

export default new Header();
