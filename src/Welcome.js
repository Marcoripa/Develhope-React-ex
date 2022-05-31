import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <p>Hello {this.props.name}!</p>
            </div>
        )
    }
}