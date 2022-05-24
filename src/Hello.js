import React from 'react';

class Age extends React.Component{
    render() {
        return <p>Your age is {this.props.age}</p>
    }
}

export class Welcome extends React.Component{
    render() {
        return (
            <div>
              <p>Welcome, {this.props.name}</p>
              <Age age = {21}/>
            </div>
        )
    }
}

