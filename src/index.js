//@flow

/**
 * include asynx
 * @type {[type]}
 */


import {V} from "./entry";

import ax from "./entry";

const storage = window.ax = new ax.storage();

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

	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});

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
	//window.location.href.split('=')[1]

	if (window.location.href.split('?').length>1){

		await storage.fetch('game',`/game/?${window.location.href.split('?')[1]}`);

		sessionStorage.setItem('game',sessionStorage.getObject('game')[0]);

		sessionStorage.setItem('game-ttl', 'infinity');

		//console.log(sessionStorage.getObject('game').data.font)

		const data = sessionStorage.getObject('game').data;

		new V({
			type:'style',
			style:`
				* {
					${data.font}
				}
				video {
					border-top-left-radius:  ${data.radius} !important;
					border-top-right-radius:  ${data.radius} !important;
				}
        .pane, .border_nav {
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
			`
		})

	} else {



	}

	// get copy

	await storage.fetch('copy', '/en/copy/copy.json');

	// instanciate app

	window.home = await new ax();

};
