//@flow

import {
	V
} from "../entry";

class Header extends V {

	type: string = `header`;
	renderTo: string = `main`;
	style = `margin-top:17.5vh`
	mounted: any = () => {

		feather.replace();
	};

	innerHTML: string = `

		<span>
			<a href="https://github.com/ryanspice" target="_blank"><i data-feather="github"></i></a>
			<a href="https://twitter.com/ryanspice?lang=en" target="_blank"><i data-feather="twitter" ></i></a>
			<a href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank"><i data-feather="linkedin" ></i></a>
		</span>

		<h2>game.ryanspice.com</h2>

		<ul>

			<!--

			<li  style="display:none" hidden>

				  apps

				  <div class="dropdown-content acrylic">

				    <h5 id="console-listItem" >
							<a style="color:rgba(225,225,225,255);"
							onclick="window.Terminal.restore(event)">console</a></h5>

						<h5><a href="https://ryanspice.com/demo/asyncx/virtual-scroll.html" target="_blank" />virtual list</a></h5>

						<h5><a href="https://ryanspice.com/dev/newman/KevinNewmanHomeBannerVanillaJS-POC.html" target="_blank" />banner</a></h5>

				  </div>

			</li>

			-->

			<li>

				<a href="https://ryanspice.com/"> home </a>

			</li>

		</ul>

	`;

};

export default new Header();
