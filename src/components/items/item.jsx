import React from 'react';

import Visualization from './visualization.jsx';
import PageButtonContainer from './page-button-container.jsx';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div className={"item " + item.link}> 
 				<div className="item-info-container">
	 				{item.title && <h1 className="item-info-header">{item.title}</h1> }
	 				{item.text && <p className="item-info-text"> {item.text}</p>}
	 				{item.courses &&  <h3 className="item-info-header">Courses</h3>}
 					{item.courses && <PageButtonContainer pages={item.courses} /> }
 					{item.blog &&  <h3 className="item-info-header">Articles</h3>}
 					{item.blog && <PageButtonContainer pages={item.blog} /> }
	 				{item.projects &&  <h3 className="item-info-header">Projects</h3>}
 					{item.projects && <PageButtonContainer pages={item.projects} /> }
 				</div>
 				{item.visualization && <Visualization vizData={item.visualization} />}
 			</div>
 		)
 	}
}

export default Item;