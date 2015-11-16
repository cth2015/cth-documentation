import React from 'react';
import mockData from "../assets/scripts/mock-data.js";

import Navigation from "./navigation/navigation-top.jsx"
import Footer from "./footer/footer.jsx"
import Post from "./post/post.jsx"

class CthDocumentation extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillMount() {
		console.log(mockData);
	}

    render() {
 		return (
 			<div className="app-container">
 				<Navigation />
 				{[0,1,2,3,4].map(function(content, key){
 					return (<Post key={key} content={content}/>)
 				})}
 				<Footer />
			</div>
 		)
 	}
}

export default CthDocumentation;