import React from "react";

export class Counter extends React.Component{
    state = {
        count: this.props.initialValue,
        interval: this.props.intervalValue,
        increment: this.props.incrementValue
    }
    
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + state.increment
                }
            })
        }, this.state.interval);
    }
    

    render() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
}
