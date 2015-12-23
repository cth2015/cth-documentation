import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryBlock from "./story-block.jsx"

class StoryItem extends React.Component{
  render() {
  	let app = this.props.app;
    let item = this.props.item;
 		return (
 			<div className={
 				"item " + 
 				(item.data.type && item.data.type)
 			}>
 				{item.data && (item.data.visualisation && <div className="visualisation"> viz </div>)}
 				<div className="conclusion">
					<Markdown source={item.content} options={ { container: false, breaks: true } } />
				</div>
 				{item.blocks && item.blocks.map(function(item, key){
 					return (<StoryBlock key={key} app={app} item={item}/>)
 				})}
 			</div>
 		)
 	}
}

export default StoryItem;