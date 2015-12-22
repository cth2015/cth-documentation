import React from 'react';

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"

import some from '../assets/content/story/properties.json';

console.log(some);

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