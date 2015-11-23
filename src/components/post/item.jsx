import React from 'react';

class Item extends React.Component{
    render() {
    	let post = this.props.post;
 		return (
 			<div> 
 				<h1>{content.name}</h1>
 				<h5>{content.author}</h5>
 				<h5>{content.date.toDateString()}</h5>
 				<p> {content.content}</p>
 			</div>
 		)
 	}
}

export default Item;