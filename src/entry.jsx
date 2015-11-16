import React from "react";
import ReactDOM from 'react-dom';
import "babel/polyfill";
import "./assets/styles/app.scss";

import CthDocumentation from "./components/cth-documentation.jsx";

let container = document.querySelector('.app-react-container');
ReactDOM.render(<CthDocumentation />, container);
