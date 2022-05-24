import React from 'react';

export class Welcome extends React.Component {
    render(name) {
        name = this.props.name
        return (
            <p>Welcome, {name}</p>
        )
    }
}