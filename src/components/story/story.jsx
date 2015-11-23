import React from 'react';

import StoryItem from "./story-item.jsx"

class Story extends React.Component{
    render() {
 		return (
 			<main className="story"> 
 				{this.props.appData.story.map(function(item, key){
 					return (<StoryItem key={key} item={item}/>)
 				})}
 			</main>
 		)
 	}
}

export default Story;