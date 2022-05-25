import React from 'react';

class Age extends React.Component{
    render() {
        return this.props.age > 18 && this.props.age < 65 && <p>Your age is {this.props.age}</p>
    }
}

export class Welcome extends React.Component{
    render() {
        return (
            <div>
              <p>Welcome, {this.props.name}</p>
              <Age age={64}/>
              <Age age={65}/>
              <Age age={19}/>
              <Age age={18}/>
            </div>
        )
    }
}

