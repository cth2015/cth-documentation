import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component{
  render() {
  let items = this.props.items;
 		return (
 			<nav className="nav-top">
 				{items.map((item, key)=>{
 					return	<Link className="nav-link" key={key} to="/" query={{location: item}}>{item}</Link>
 				})}
 			</nav>
 		)
 	}
}

export default Navigation;