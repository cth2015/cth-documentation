import React from "react";
import { Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import CthDocumentation from "./components/cth-documentation.jsx";
import Story from "./components/story/story.jsx";
import Page from "./components/story/story.jsx";


class RouterComponent extends React.Component{
	render() {
		return (
		  	<Router history={createBrowserHistory()}>
		    	<Route path="/" component={CthDocumentation}>
					<IndexRoute component={Story} />
					<Route path="course/:id" component={Page} />
					<Route path="article/:id" component={Page} />
					<Route path="project/:id" component={Page} />
					<Route path="iteration/:id" component={Page} />
		    	</Route>
		  	</Router>
		);
	}
}

export default RouterComponent;