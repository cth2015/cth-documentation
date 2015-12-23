import React from 'react';
import Markdown from 'react-remarkable';
	
class StoryReference extends React.Component{
  render() {
  	let app = this.props.app;
    let item = this.props.item;
  	let reference = (app.articles[item.slug] &&  app.articles[item.slug]) || (app.projects[item.slug] &&  app.projects[item.slug]);
 		return (
 			<div className={"reference"}>
				<h3> {reference.title} </h3>
				<p> {reference.author} </p>
				<p> {reference.description} <a> ... meer </a></p>
 			</div>
 		)
 	}
}

export default StoryReference;