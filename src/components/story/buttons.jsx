import React from 'react';
import { Link } from 'react-router';

class Buttons extends React.Component{
    render() {
		let pages = this.props.pages;
 		return (
 			<div className="page-button-container"> 
 				<h3 className="item-info-header">{this.props.header}</h3>
 				{pages.map((page, key)=>{
 					return <Link className="page-button" key={key} to={page.link || "example.com"} > {page.title} </Link>
 				})}
 			</div>
 		)
 	}
}

export default Buttons;