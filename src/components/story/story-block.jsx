import React from 'react';
import Markdown from 'react-remarkable';
	
import StoryReference from "./story-reference.jsx"

class StoryBlock extends React.Component{
  render() {
  	let app = this.props.app;
    let block = this.props.block;
    let blockClasses = [
    	"block",
    	block.type
    ].join(' ');
 		return (
 			<div className={blockClasses}>
				<Markdown source={block.content} options={{
          container: false, 
          breaks: true 
        }} />
			  { block.references && block.references.map(function(reference, key){
				  return (<StoryReference key={key} app={app} reference={reference}/>)
			  })}
 			</div>
 		)
 	}
}

export default StoryBlock;