import React from "react";
import ReactDOM from "react-dom";
import {Counter} from "./Counter"

ReactDOM.render(<Counter initialValue = {50} intervalValue = {500} incrementValue = {5}/>, document.getElementById('root'))
