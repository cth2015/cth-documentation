import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryBlock from "./story-block.jsx"

class StoryItem extends React.Component{
  render() {
  	let app = this.props.app;
    let item = this.props.item;
    let itemClasses = [
    	"item",
    	item.type
    ].join(' ');
 		return (
 			<div className={itemClasses}>
				<div className="visualisation"> 
					<p>synthesis</p>
				</div>
 				<div className="block-red">
					<Markdown source={item.content} options={{ 
						container: false, 
						breaks: true 
					}} />
				</div>
 			</div>
 		)
 	}
}

export default StoryItem;