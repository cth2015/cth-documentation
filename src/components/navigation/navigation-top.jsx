import React from 'react';

class Navigation extends React.Component{
    render() {
    	let items = this.props.items;
		console.log(items);
 		return (
 			<nav>
 				{items.map((item, key)=>{
 					return	<a key={key} href={item.content.link}>{item.title}</a>
 				})}
 			</nav>
 		)
 	}
}

export default Navigation;