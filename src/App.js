import React from "react";
import { ClickTracker } from "./Counter";

export class App extends React.Component{
    render() {
        return (
            <div>
                <ClickTracker />
            </div>
        )
    }
}