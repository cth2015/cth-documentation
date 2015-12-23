import React from 'react';

import StoryHeader from "./story-header.jsx"
import StoryItem from "./story-item.jsx"

class Story extends React.Component{
  render() {
  	let app = this.props.app;
 		return (
 			<main className="story">
 				<StoryHeader app={app} item={app.story.storyHeader}/>
 				{this.props.app.story.storyItems.map(function(item, key){
 					return (<StoryItem key={key} app={app} item={item}/>)
 				})}
 			</main>
 		)
	}
}

export default Story;