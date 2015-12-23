import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryReference from "./story-reference.jsx"

class StoryBlock extends React.Component{
  render() {
  	let app = this.props.app;
    let item = this.props.item;
    console.log(item)
 		return (
 			<div className={
 				"block " + 
 				(item.data && (item.data.references && " references")) +
 				(item.data && (item.data.type && " " + item.data.type))
 				}
 			>
				<Markdown source={item.content} options={ { container: false, breaks: true } } />
 				{item.data && (item.data.references && item.data.references.map(function(item, key){
 					return (<StoryReference key={key} app={app} item={item}/>)
 				}))}
 			</div>
 		)
 	}
}

export default StoryBlock;