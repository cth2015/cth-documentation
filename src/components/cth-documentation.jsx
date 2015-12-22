import React from 'react';

import appData from '../assets/data/story.json'

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"

import fs from 'fs';



// var storyData = {
// 	"block-01-header": {
// 		"conclusion": 

// 	}
// }

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			app: {
				story: ["something"]
			},
			navigation: ["Coding the Humanities", "From Content to Context", "... to Curation", "... to Facilitation", "Partners", "About", ]
		};
	}

  render() {
 		return (
 			<div className="app-container">
 				<Navigation items={this.state.navigation}/>
      	{this.props.children && React.cloneElement(this.props.children, {app: this.state.app})}
 				<Footer />
			</div>
 		);
 	}
}

export default CthDocumentation;