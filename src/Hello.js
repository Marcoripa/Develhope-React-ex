import React from 'react';

class Message extends React.Component{
    render() {
        return (
            <p>What a beautiful day!</p>
        )
    }
}

export class Hello extends React.Component{
    render() {
        return (
            <div>
               <h1>Hello World</h1>
               <Message />
            </div>
        )
    }
}