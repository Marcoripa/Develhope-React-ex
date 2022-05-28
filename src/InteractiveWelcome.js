import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: ''
    }

    handleInput = (event) => {
       this.setState({
           username: event.target.value
       }) 
    }
    render() {
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input value={this.state.username} onChange={this.handleInput}></input>
            </div>
        )
    }
}