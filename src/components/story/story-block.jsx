import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryReference from "./story-reference.jsx"

class StoryBlock extends React.Component{
  render() {
    let item = this.props.item;
 		return (
 			<div className={"item " + item.link}>
				<Markdown source={item.content} options={ { container: false, breaks: true } } />
 				{item.references ? item.references.map(function(item, key){
 					return (<StoryReference key={key} item={item}/>)
 				}) : <div />}
 			</div>
 		)
 	}
}

export default StoryBlock;