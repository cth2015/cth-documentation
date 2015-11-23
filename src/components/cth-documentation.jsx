import React from 'react';
import {App, Entity} from "../assets/scripts/model.js";

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"
import Item from "./post/item.jsx"

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
		this.state = { appData: new App(5, 20, 10) };
		console.log('constructor', this.state.appData);
	}

    render() {
		let appData = this.state.appData;
 		return (
 			<div className="app-container">
 				<Navigation items={appData.story}/>
 				{appData.story.map(function(item, key){
 					return (<Item key={key} item={item}/>)
 				})}
 				<Footer />
			</div>
 		)
 	}
}

export default CthDocumentation;