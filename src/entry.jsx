import React from "react";
import ReactDOM from 'react-dom';
import "babel/polyfill";
import "./assets/styles/app.scss";

import CthDocumentation from "./components/cth-documentation.jsx";
import RouterComponent from "./router.jsx";

let container = document.querySelector('.app-react-container');

ReactDOM.render(<RouterComponent />, container);