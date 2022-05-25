import React from 'react';

class Age extends React.Component{
    render() {
        return (this.props.age && <p>Your age is {this.props.age}</p>)
    }
}

export class Welcome extends React.Component{
    render() {
        return (
            <div>
              <p>Welcome, {this.props.name}</p>
              <Age />
            </div>
        )
    }
}

