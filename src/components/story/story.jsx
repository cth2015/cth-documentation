import React from 'react';

import StoryItem from "./story-item.jsx"

class Story extends React.Component{
  render() {
  	let app = this.props.app;
 		return (
 			<main className="story"> 
 				{this.props.app.story.map(function(item, key){
 					return (<StoryItem key={key} app={app} item={item}/>)
 				})}
 			</main>
 		)
	}
}

export default Story;