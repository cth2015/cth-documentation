import React from 'react';
import Markdown from 'react-remarkable';

var importedData = {
	markdown: "# Something cool \n and something else"
};
	
class StoryItem extends React.Component{
  render() {
    let item = this.props.item;
 		return (
 			<div className={"item " + item.link}>
 				<div className="item-info-container">
 					<Markdown source={item.content} options={ { container: false, breaks: true } } />
 				</div>
 			</div>
 		)
 	}
}

export default StoryItem;