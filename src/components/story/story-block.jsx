import React from 'react';
import Markdown from 'react-remarkable';
	
class StoryBlock extends React.Component{
  render() {
    let item = this.props.item;
 		return (
 			<div className={"item " + item.link}>
 				<div className="item-info-container">
 					<Markdown source={item.content} options={ { container: false, breaks: true } } />
 				</div>
 				{item.blocks.map(function(item, key){
 					return (<StoryBlock key={key} item={item}/>)
 				})}
 			</div>
 		)
 	}
}

export default StoryBlock;