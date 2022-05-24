import React from 'react';

export class Welcome extends React.Component{
    render() {
        let name = this.props.name
        return (
            <p>Welcome, {name}</p>
        )
    }
}

Welcome.defaultProps = {
        name: 'Marco'
}