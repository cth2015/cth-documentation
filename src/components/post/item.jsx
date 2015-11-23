import React from 'react';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div className={"item " + item.link}> 
 				<div className="item-info-container">
	 				<h1 className="item-info-header">{item.title}</h1>
	 				<p className="item-info-text"> {item.text}</p>
 				</div>
 			</div>
 		)
 	}
}

export default Item;