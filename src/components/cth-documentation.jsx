import React from 'react';

import appData from '../assets/data/story.json'

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"
import Item from "./items/item.jsx"

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
		this.state = { appData: appData.app };
	}

    render() {
		let appData = this.state.appData;
		console.log(appData);
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