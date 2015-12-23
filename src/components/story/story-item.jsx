import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryBlock from "./story-block.jsx"

class StoryItem extends React.Component{
  render() {
    let item = this.props.item;
 		return (
 			<div className={"item " + item.link}>
				<Markdown source={item.content} options={ { container: false, breaks: true } } />
 				{item.blocks ? item.blocks.map(function(item, key){
 					return (<StoryBlock key={key} item={item}/>)
 				}): <div />}
 			</div>
 		)
 	}
}

export default StoryItem;