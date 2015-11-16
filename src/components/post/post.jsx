import React from 'react';

class Post extends React.Component{
    render() {
 		return (
 			<div> Single Post {this.props.content}</div>
 		)
 	}
}

export default Post;