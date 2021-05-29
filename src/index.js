import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "semantic-ui-css/semantic.min.css";
import "./semantic/dist/semantic.min.css";

import "typeface-open-sans";
import "typeface-open-sans-condensed";


import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();