import React from "react";
import ReactDOM from "react-dom";
import {ClickTracker} from './Counter'
import './index.css'

const onCounterChange = (value) => {
    alert(`The count value is: ${value}`)
}

ReactDOM.render(<ClickTracker counterChange={onCounterChange}/>, document.getElementById('root'))