import React from 'react';

import appData from '../assets/data/story.json'

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
		this.state = { appData: appData.app };
	}

    render() {
		let appData = this.state.appData;
 		return (
 			<div className="app-container">
 				<Navigation items={appData.story}/>
        		{this.props.children && React.cloneElement(this.props.children, {appData: appData})}
 				<Footer />
			</div>
 		)
 	}
}

export default CthDocumentation;