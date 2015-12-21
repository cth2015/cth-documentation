import React from 'react';

class Page extends React.Component{
    render() {
    	let regexp = /\w+[/]/;
    	console.dir(regexp.exec('courses/1'));
    	// console.log(this.props.routeParams.id);
    	// console.log(this.props.appData.)
 		return (
 			<main className="page"> 
 				<h1>PAGES</h1>
 			</main>
 		)
 	}
}

export default Page;