import React from 'react';

class PageButtonContainer extends React.Component{
    render() {
		let pages = this.props.pages;
 		return (
 			<div className="page-button-container"> 
 				{pages.map((page, key)=>{
 					return <button className="page-button" key={key} > {page.title} </button>
 				})}
 			</div>
 		)
 	}
}

export default PageButtonContainer;