import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const header = <h1>Hallo Düsseldorf</h1>;
const element = <div>Düsseldorf ist schöner als Köln</div>;

ReactDOM.render(header, document.getElementById("header"));
ReactDOM.render(element, document.getElementById("main"));
