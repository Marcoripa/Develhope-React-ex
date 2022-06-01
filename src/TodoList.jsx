import React from 'react';
import './todoList.css'

export class TodoList extends React.Component {
    state = {
        items: ['table', 'chair', 'lamp'],
        addItem: ''
    }
    
    handlItem = () => {
        this.setState({
            items: [...this.state.items, this.state.addItem],
            addItem: ''
        })
    } 

    handleInput = (event) => {
        this.setState({
            addItem: event.target.value
        })
    }

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    handleRemove = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div className='container'>
                      <ul>
                          {this.props.render(this.state.items)}
                      </ul>
                <input
                    value={this.state.addItem}
                    onChange={this.handleInput}></input>
                <button onClick={this.handlItem}>Add Item</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}