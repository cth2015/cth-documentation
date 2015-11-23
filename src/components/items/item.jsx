import React from 'react';

import Visualization from './visualization/visualization.jsx';
import PageButtonContainer from './page-button-container.jsx';
import PeopleContainer from './about/people-container.jsx';

class Item extends React.Component{
    render() {
    	let item = this.props.item;
 		return (
 			<div className={"item " + item.link}> 
 				<div className="item-info-container">
	 				{item.title && <h1 className="item-info-header">{item.title}</h1> }
	 				{item.text && <p className="item-info-text"> {item.text}</p>}
 					{item.courses && <PageButtonContainer header="Courses" pages={item.courses} /> }
 					{item.projects && <PageButtonContainer header="Projects" pages={item.projects} /> }
 					{item.iterations && <PageButtonContainer header="Iterations" pages={item.iterations} /> }
 					{item.blog && <PageButtonContainer header="Blog" pages={item.blog} /> }
 					{item.people && <PeopleContainer header="People" people={item.people} /> }
 				</div>
 				{item.visualization && <Visualization vizData={item.visualization} />}
 			</div>
 		)
 	}
}

export default Item;