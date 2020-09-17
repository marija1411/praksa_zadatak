import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./components/Vehicle.json";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
