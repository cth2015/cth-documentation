import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryBlock from "./story-block.jsx"

class StoryItem extends React.Component{
  render() {
  	let app = this.props.app;
    let item = this.props.item;
    let itemClasses = [
    	"item"
    ].join(' ');
 		return (
 			<div className={itemClasses}>
 				<div className="column-left">
					<StoryBlock app={app} block={item.blocks[0]}/>
					<StoryBlock app={app} block={item.blocks[1]}/>
					<StoryBlock app={app} block={item.blocks[2]}/>
				</div>
 				<div className="column-right">
					<StoryBlock app={app} block={item.blocks[3]}/>
 				</div>
 			</div>
 		)
 	}
}

export default StoryItem;