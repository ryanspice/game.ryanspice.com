//@flow

/**
 * include asynx
 * @type {[type]}
 */

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
		//console.log()

//		sessionStorage.setItem('game', JSON.stringify(JSON.parse(`{${JSON.parse(sessionStorage.getItem('game'))[0]}}`).data));

		sessionStorage.setItem('game-ttl', 'infinity');

	} else {

		//window.location = "https://ryanspice.com/";

	}

	// get copy

	await storage.fetch('copy', '/en/copy/copy.json');

	// instanciate app

	window.home = await new ax();

};
