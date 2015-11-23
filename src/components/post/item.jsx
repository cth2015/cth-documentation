import React from 'react';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div> 
 				<h1>{item.title}</h1>
 				<p> {item.content.content}</p>
 			</div>
 		)
 	}
}

export default Item;