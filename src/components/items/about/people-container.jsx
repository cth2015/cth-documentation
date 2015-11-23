import React from 'react';

class PeopleContainer extends React.Component{
    render() {
 		return (
 			<div className="people-container">
 				<h3 className="item-info-header people-header">{this.props.header}</h3>
 				<div className="people-avatar-container">
	 				{this.props.people.map((person, key)=>{
	 					return <img className="avatar" key={key} src={person.image} />
	 				})}
 				</div>
 			</div>
 		)
 	}
}

export default PeopleContainer;