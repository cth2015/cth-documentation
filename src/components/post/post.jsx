import React from 'react';

class Post extends React.Component{
    render() {
    	let post = this.props.post;
 		return (
 			<div> 
 				<h1>{post.name}</h1>
 				<h5>{post.author}</h5>
 				<h5>{post.date.toDateString()}</h5>
 				<p> {post.content}</p>
 			</div>
 		)
 	}
}

export default Post;