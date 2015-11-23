import React from 'react';

class Buttons extends React.Component{
    render() {
		let pages = this.props.pages;
 		return (
 			<div className="page-button-container"> 
 				<h3 className="item-info-header">{this.props.header}</h3>
 				{pages.map((page, key)=>{
 					return <a className="page-button" key={key} > {page.title} </a>
 				})}
 			</div>
 		)
 	}
}

export default Buttons;