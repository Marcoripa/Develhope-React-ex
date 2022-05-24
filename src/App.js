import React from "react";
import {Welcome} from './Hello'


export class App extends React.Component{
    render() {
        return (
            <div>
              <Welcome name = {<strong>Marco</strong>} />
            </div>
        ) 
    }
}