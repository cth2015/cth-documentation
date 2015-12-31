import React from "react";
import { Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import CthDocumentation from "./components/cth-documentation.jsx";
import Story from "./components/story/story.jsx";
import Page from "./components/pages/page.jsx";


class RouterComponent extends React.Component{
	render() {
		return (
	  	<Router history={createBrowserHistory()}>
	    	<Route path="/" component={CthDocumentation}>
					<IndexRoute component={Story} />
					<Route path="courses/:id" component={Page} />
					<Route path="articles/:id" component={Page} />
					<Route path="projects/:id" component={Page} />
					<Route path="iterations/:id" component={Page} />
	    	</Route>
	    	<Route path="/cth-documentation" component={CthDocumentation}>
					<IndexRoute component={Story} />
					<Route path="courses/:id" component={Page} />
					<Route path="articles/:id" component={Page} />
					<Route path="projects/:id" component={Page} />
					<Route path="iterations/:id" component={Page} />
	    	</Route>
	  	</Router>
		);
	}
}

export default RouterComponent;