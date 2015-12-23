import React from 'react';
import Markdown from 'react-remarkable';
	
class StoryReference extends React.Component{
  render() {
    let item = this.props.item;
 		return (
 			<div className={"item " + item.link}>
				reference
 			</div>
 		)
 	}
}

export default StoryReference;