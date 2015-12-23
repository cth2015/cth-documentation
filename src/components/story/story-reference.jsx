import React from 'react';
import Markdown from 'react-remarkable';
	
class StoryReference extends React.Component{
  render() {
  	let app = this.props.app;
    let reference = this.props.reference;
  	let referenceFull = (app.articles[reference.slug] &&  app.articles[reference.slug]) || (app.projects[reference.slug] &&  app.projects[reference.slug]);
 		return (
 			<div className="reference">
				<h3> {referenceFull.title} </h3>
				<p> {referenceFull.author} </p>
				<p> {referenceFull.description} <a> ... meer </a></p>
 			</div>
 		)
 	}
}

export default StoryReference;