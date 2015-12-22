import React from 'react';
import Markdown from 'react-remarkable';

var importedData = {
	markdown: "# Something cool \n and something else"
};
	
class StoryItem extends React.Component{
    render() {
    let item = this.props.item;
		let backgroundStyle = item.image ? { backgroundImage: "url(" + item.image + ")" } : {};

 		return (
 			<div className={"item " + item.link} style={backgroundStyle}>
 				<div className="item-info-container">
 					<Markdown source={importedData.markdown} options={ { container: false, breaks: true } } />
 				</div>
 			</div>
 		)
 	}
}

export default StoryItem;