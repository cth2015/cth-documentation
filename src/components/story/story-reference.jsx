import React from 'react';
import Markdown from 'react-remarkable';
	
class StoryReference extends React.Component{
  render() {
    let item = this.props.item;
  	let app = this.props.app;
  	let reference = (app.articles[item.slug] &&  app.articles[item.slug]) || (app.projects[item.slug] &&  app.projects[item.slug]);
 		return (
 			<div className={"reference " + item.link}>
				<h3> {reference.title} </h3>
				<p> {reference.author} </p>
				<p> {reference.description} <a> ... meer</a></p>
 			</div>
 		)
 	}
}

export default StoryReference;