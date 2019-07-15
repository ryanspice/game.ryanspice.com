//@flow

/**
 * include asynx
 * @type {[type]}
 */



import ax from "./entry";

const storage = window.ax = new ax.storage();

import {V} from "./entry";

/**
 * requires the components folder
 *  - components are loaded automatically and are instanciated by 'sequence'
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */

require("./components");

/**
 *  code executed to the templating engine before it runs
 */

ax.pre = async function(){

	if(document.getElementsByTagName('loader')[0]){
		document.getElementsByTagName('loader')[0].remove();
	}

};

/**
 *  code executed to the templating engine after it runs
 */

ax.post = async function(){

	//await document.body.insertAdjacentHTML( 'beforeend', (`<style>html {background:${e.data.primary} !important;} a {color:${e.data.secondary} !important;}</style>`));

}

/**
 *  code to execute the templating engine onload
 * @param  {[type]} evt [description]
 * @return {[type]}     [description]
 */

window.onload = async function onload(evt){

	// get game related data

	if (window.location.href.split('?').length>1){

		await storage.fetch('game',`/game/?${window.location.href.split('?')[1]}`);

		sessionStorage.setItem('game',sessionStorage.getObject('game')[0]);

		sessionStorage.setItem('game-ttl', 'infinity');

		const data = sessionStorage.getObject('game').data;

		new V({
			type:'style',
			style:`
				* {
					${data.font}
				}
				a {

//						color:${data.colour2} !important;
				}
				video {
					border-top-left-radius:  ${data.radius} !important;
					border-top-right-radius:  ${data.radius} !important;
				}
        .theme, .pane, .border_nav {
					background:${data.colour2} !important;
					border-radius: ${data.radius} !important;
					-webkit-box-shadow:0 0 2px 1px ${data.colour} !important;
					-moz-box-shadow:0 0 2px 1px ${data.colour} !important;
					box-shadow:0 0 2px 1px ${data.colour} !important;
				}

				.menulist .border_nav {
					color:${data.colour} !important;
					-webkit-text-stroke-width: 1.5px;
					-webkit-text-stroke-color:${data.colour2};
					-webkit-text-fill-color: ${data.colour2};
					text-outline: 2px ${data.colour2} !important;
				}

				main section img {

					background:${data.colour2} !important;
					border-radius: ${data.radius} !important;
					-webkit-box-shadow:0 0 2px 1px ${data.colour} !important;
					-moz-box-shadow:0 0 2px 1px ${data.colour} !important;
					box-shadow:0 0 2px 1px ${data.colour} !important;

				}

				main section.pane {
					border-radius: ${data.radius} !important;
				}

			`
		})

	} else {

		new V({
			type:'section',
			renderTo:'main',
			innerHTML:`<div class="row textWhite">
			<div class="large-12 small-12 columns add-margin " id="games">
				<h3 class="textWhite fontBlack">
					<a class="pNav" onclick="Main.Portfolio.Change(this)" id="gamesERs">Games</a>
					<span style="opacity:0.18;"> - </span>
					<a class="pNav hidden" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Applications</a>
					<span style="opacity:0.18;" class="hidden"> - </span>
					<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Concepts</a>
					<span style="opacity:0.18;"> - </span>
					<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Art</a>
					<span style="opacity:0.18;"> - </span>
					<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Audio</a>
				</h3>

				<div class="tile gametile">
					<img src="images/image_title_ReverenceLost.png">
					<h2>
						<sub>HTML5</sub>
						<a target="_blank" href="https://ryanspice.com/game.php?game=ReverenceLost"> Read More</a>
					</h2>
				</div>
				<div class="tile tileKong">
					<img src="images/image_title_KongQuest.png">
					<h2>
						<sub>HTML5</sub>
						<a target="_blank" href="https://ryanspice.com/game.php?game=KongQuest"> Read More</a>
					</h2>
				</div>
				<div class="tile gametileSnow">
					<img src="images/image_title_SnowBoarding.png">
					<h2>
						<sub> HTML5</sub>
						<a target="_blank" href="https://ryanspice.com/game.php?game=SnowBoarding"> Read More</a>
					</h2>
				</div>
				<div class="tile tileFish">
					<img src="images/image_title_FlappyFish.png">
					<h2>
						<sub>HTML5</sub>
						<a target="_blank" href="https://ryanspice.com/game.php?game=FlappyFish"> Read More</a>
					</h2>
				</div>
				<div class="tile tileBovxel">
					<img src="images/image_title_Bovxel.png">
					<h2>
						<sub>HTML5</sub>
						<a target="_blank" href="https://ryanspice.com/game.php?game=Bovxel"> Read More</a>
					</h2>
				</div>
				<div class="tile tileDodgeball">
					<img src="images/image_title_Dodgeball.png">
					<h2>
						<sub>GameMaker (Win32)</sub>
						<a target="_blank" href="https://ryanspice.com/Dodgeball/Dodgeball.zip"> Download</a>
					</h2>
				</div>
			</div>

			<span id="applications" style="display:none;">
				<div class="tiles" style="display:block !important;">
					<h2>
						<a href="#"> Read More</a>
					</h2>
				</div>
				<div class="tiles" style="display:block !important;">
					<h2>AudioIntel
						<a href="#"> Read More</a>
					</h2>
				</div>
				<div class="tiles" style="display:block !important;">
					<h2>FutureVault
						<a href="#"> Read More</a>
					</h2>
				</div>
				<div class="tiles" style="display:block !important;">
					<h2>JaTech Ecommerce
						<a href="#"> Read More</a>
					</h2>
				</div>
			</span>

			<span id="concepts"></span>

			<span id="art"></span>

            <span id="soundcloud" style="display:none;"></span>

		</div>`,
		sequence:5,
		mounted:function(){
			//setTimeout(()=>{

				(document.getElementsByTagName('section')[0]).remove();
				(document.getElementsByTagName('section')[0]).remove();
				(document.getElementsByTagName('section')[0]).remove();
				(document.getElementsByTagName('video')[0]).remove();

			//},200)
		}
			})


	}

	// get copy

	await storage.fetch('copy', '/en/copy/copy.json');

	//sort by sequence
	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});


	// instanciate app

	window.home = await new ax();

};
