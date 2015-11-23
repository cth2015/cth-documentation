import React from 'react';

import Visualization from './visualization.jsx';
import PageButtonContainer from './page-button-container.jsx';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div className={"item " + item.link}> 
 				<div className="item-info-container">
	 				<h1 className="item-info-header">{item.title}</h1>
	 				<p className="item-info-text"> {item.text}</p>
 					{item.pages && <PageButtonContainer pages={item.pages} /> }
 				</div>
 				{item.visualization && <Visualization vizData={item.visualization} />}
 			</div>
 		)
 	}
}

export default Item;