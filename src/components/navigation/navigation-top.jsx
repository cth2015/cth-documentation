import React from 'react';

class Navigation extends React.Component{
    render() {
    	let items = this.props.items;
 		return (
 			<nav className="nav-top">
 				{items.map((item, key)=>{
 					return	<a className="nav-link" key={key} href={item.link}>{item.title}</a>
 				})}
 			</nav>
 		)
 	}
}

export default Navigation;