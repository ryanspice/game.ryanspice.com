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
				type:'style',
				innerHTML:`

.tile,.tiles{overflow:hidden;margin:0px auto;width:100%;min-height:128px;background:#191919;margin-bottom:13px;padding:13px;}
.tile a{font-size:0.8em;font-family:'Arial Black'!important;font-weight:200;text-shadow:0px 0px 2px #000,-1px -1px 1px #000,1px -1px 1px #000,-1px 1px 1px #000,1px 1px 1px #000;}
.tile h2{z-index:3;float:right;}
.tile h2 sub{font-size:0.5em!important;font-family:'Arial Narrow'!important;color:#DDDDDD!important;position:relative;z-index:3;right:0px;top:0px;margin-bottom:-25px;}
.tile h2 a{position:absolute;right:10%;margin-top:0px;z-index:4;}
.tile img{float:left;z-index:2;position:absolute;left:0px;margin:-15px;margin-left:5%;max-height:128px;overflow:hidden;}
.gametile{background:url("https://ryanspice.com/images/rev.png");background-position:center top;background-position:0px -10px;}
.gametile img{-ms-transform:scale(2);-webkit-transform:scale(2);transform:scale(2);position:relative!important;left:10%;}
.gametile h2{color:#DDAADD;font-family:Syncopate;float:right;text-align:right;}
.gametileSnow a{color:white;}
.gametileSnow{background:url("https://ryanspice.com/images/snow.png");background-position:center top;background-position:-155px 12%;}
.gametileSnow h2{color:white;font-family:OpenSansCondensed;font-weight:bold;text-align:right;float:right;}
.tileBovxel h2 a{color:#333333;font-family:VT323;font-weight:black;float:right;text-align:right;color:white;}
.tileBovxel{background:url("https://ryanspice.com/images/bovxel.png");background-position:center top;background-position:-155px 35%;}
.tileFish{background:url("https://ryanspice.com/images/flap.png");background-position:center top;background-position:0px 90%;}
.tileFish h2{text-align:right;color:#7ff9c3;font-family:BubblegumSans;}
.tileDodgeball h2 a{font-family:BubblegumSans;float:right;text-align:right;}
.tileDodgeball img{-ms-transform:scale(2);-webkit-transform:scale(2);transform:scale(2);position:relative!important;left:10%;top:10px;}
.tileDodgeball{overflow:hidden;background:url("https://ryanspice.com/images/dodgeball.png");background-position:center top;background-position:-131px 35px;width:100%;height:100%;}
.tileKong{overflow:hidden;background:url("https://ryanspice.com/images/KongQuest/background_KongQuest.png");}
.fontBlack{font-family:'Arial Black'!important;}
.textWhite{color:white;text-shadow:0 0 1px #030303;text-shadow:0px 0px 2px #000,-1px -1px 1px #000,1px -1px 1px #000,-1px 1px 1px #000,1px 1px 1px #000;}
.tile {

	max-height: 128px;
}
.tile img {
    float: left;
    z-index: 2;
    position: absolute;
    left: 0px;
    top: 50px;
    margin: -5%;
    margin-left: 5%;
    max-height: 100%;
    max-height: 128px;
    max-width: auto;
    overflow: hidden;
    //max-width: 100%;
		width:auto;

}

.tile:hover {
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
	cursor:pointer;

	box-shadow:0px 0px 2px 2px rgba(255,255,255,0.25);
	transition:100ms all;

}


`
			})

		new V({
			type:'section',
			renderTo:'main',
			innerHTML:`</script><div class="row textWhite">
			<div class="large-24 small-24 columns add-margin " id="games" >
				<h3 class="textWhite fontBlack" hidden>
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

				<div class="tile gametile" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_ReverenceLost.png" style="transform:scale(0.5);max-height:256px;position:relative;top:-40px;">
					<h2>
						<sub>HTML5</sub>
						<a  href="?game=ReverenceLost"> Read More</a>
					</h2>
				</div>
				<div class="tile tileKong" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_KongQuest.png">
					<h2>
						<sub>HTML5</sub>
						<a  href="?game=KongQuest"> Read More</a>
					</h2>
				</div>
				<div class="tile gametileSnow" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_SnowBoarding.png">
					<h2>
						<sub> HTML5</sub>
						<a  href="?game=SnowBoarding"> Read More</a>
					</h2>
				</div>
				<div class="tile tileFish" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_FlappyFish.png">
					<h2>
						<sub>HTML5</sub>
						<a  href="?game=FlappyFish"> Read More</a>
					</h2>
				</div>
				<div class="tile tileBovxel" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_Bovxel.png">
					<h2>
						<sub>HTML5</sub>
						<a  href="?game=Bovxel"> Read More</a>
					</h2>
				</div>
				<div class="tile tileDodgeball" onclick="this.children[1].children[1].click()">
					<img src="https://ryanspice.com/images/image_title_Dodgeball.png">
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
	function includeJS(p_file, callback) {
	    var v_js  = document.createElement('script');
	    v_js.type = 'text/javascript';
	    v_js.src = p_file;

	    v_js.onreadystatechange = callback;
	    v_js.onload = callback;

	    document.getElementsByTagName('head')[0].appendChild(v_js);
			document.on
	}
	await includeJS('https://ryanspice.com/app.js', ()=>{

		window.document.dispatchEvent(new Event("DOMContentLoaded", {
			bubbles: true,
			cancelable: true
			}));

	})

	// instanciate app

	window.home = await new ax();

};
