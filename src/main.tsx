import React from "react";
import ReactDom from "react-dom";
import App from "./app";

setTimeout(() => {
    ReactDom.render(<App />, document.getElementById("root"));
}, 1500);
