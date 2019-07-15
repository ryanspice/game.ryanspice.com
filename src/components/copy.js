//@flow

import {
	AsyncView
} from "../entry";

class Copy extends AsyncView {

	type: string = 'copy';
	renderTo: string = `main`;
	sequence: number = 6;

	mounted: Function = async function(elm){

		const data = await (await fetch('/api/en/copy/copy.json')).json();

		this.innerHTML = `
			<p>
			${data.text[0]}
			${data.text[1]}
			<p>
			${data.thanks}
			<br/>
			<br/>
			<img  src="${data.image}"/>
			<br/>
			<br/>
			${data.copy} ${new Date().getFullYear()} ${window.location.hostname}
		`;

	}

}

export default new Copy();
