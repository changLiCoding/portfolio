import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<div className='container'>
			<App />
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
