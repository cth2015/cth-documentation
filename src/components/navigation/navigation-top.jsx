import React from 'react';

class Navigation extends React.Component{
    render() {
    	let items = this.props.items;
 		return (
 			<nav className="nav-top">
 				{items.map((item, key)=>{
 					return	<a key={key} href={item.content.link}>{item.title}</a>
 				})}
 			</nav>
 		)
 	}
}

export default Navigation;