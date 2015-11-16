import React from 'react';
import {App, Entity} from "../assets/scripts/model.js";

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"
import Post from "./post/post.jsx"

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
		this.state = { appData: new App(40, 3) };
		console.log('constructor', this.state.appData);
	}

    render() {
		let appData = this.state.appData;
 		return (
 			<div className="app-container">
 				<Navigation />
 				{appData.posts.map(function(post, key){
 					return (<Post key={key} post={post}/>)
 				})}
 				<Footer />
			</div>
 		)
 	}
}

export default CthDocumentation;