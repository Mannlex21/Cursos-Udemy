import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./components/CounterApp";
import { FirstApp } from "./FirstApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <FirstApp title={"Adios mundo!"}></FirstApp> */}
		<CounterApp value={0}></CounterApp>
	</React.StrictMode>
);
