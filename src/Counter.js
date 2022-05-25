import React from "react";

class CounterDisplay extends React.Component {
    render() {
        return <h1>{this.props.counter}</h1>
    }
}

export class Counter extends React.Component{
    state = {
        count: this.props.initialValue,
        interval: this.props.intervalValue,
        increment: this.props.incrementValue
    }
    
    // constructor(props) {
    //     super(props)
    // }
    

    render() {
        return (
            <CounterDisplay counter = {this.state.count}/>
        )
    }

    componentDidMount() {

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + state.increment
                }
            })
        }, this.state.interval);
    }
}