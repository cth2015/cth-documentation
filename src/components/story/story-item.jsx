import React from 'react';

import Partners from './partners.jsx';
import Buttons from './buttons.jsx';
import People from './people.jsx';

class StoryItem extends React.Component{
    render() {
    	let item = this.props.item;
		let backgroundStyle = item.image ? { backgroundImage: "url(" + item.image + ")" } : {};

 		return (
 			<div className={"item " + item.link} style={backgroundStyle}> 
 				<div className="item-info-container">
	 				{item.title && <h1 className="item-info-header">{item.title}</h1> }
	 				{item.text && <p className="item-info-text"> {item.text}</p>}
 					{item.courses && <Buttons header="Courses" pages={item.courses} /> }
 					{item.projects && <Buttons header="Projects" pages={item.projects} /> }
 					{item.iterations && <Buttons header="Iterations" pages={item.iterations} /> }
 					{item.blog && <Buttons header="Blog" pages={item.blog} /> }
 					{item.people && <People header="People" people={item.people} /> }
 				</div>
 				{item.visualization && <Partners vizData={item.visualization} />}
 			</div>
 		)
 	}
}

export default StoryItem;