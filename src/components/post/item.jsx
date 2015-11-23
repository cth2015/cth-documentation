import React from 'react';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div className="item" style={{backgroundImage: "url(" + item.content.image + ")"}}> 
 				<h1>{item.title}</h1>
 				<p> {item.content.content}</p>
 			</div>
 		)
 	}
}

export default Item;