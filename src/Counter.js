import React from "react";

export class ClickTracker extends React.Component{
state = {
    content: ''
}

    handleClick = (event) => { 
        this.setState(() => {
            return {
                content: event.target.name
            }
        })
    }

    render() {
        return (
            <div>
              <button onClick={this.handleClick} name="Button One">Button One</button>
              <button onClick={this.handleClick} name="Button Two">Button Two</button>
              <button onClick={this.handleClick} name="Button Three">Button Three</button>
              <h1>The last button clicked was: {this.state.content}</h1>
            </div>
        )
    }
}