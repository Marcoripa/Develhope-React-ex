import React from 'react';
import './todoList.css'

export class TodoList extends React.Component {
    state = {
        items: [
            'table', 'chair', 'lamp'
        ],
        addItem: ''
    }
    
    handlItem = () => {
        this.setState({
            items: [...this.state.items, this.state.addItem],
            //riassegna il valore dell'input ad una stringa vuota
            addItem: ''
        })
    } 
    handleInput = (event) => {
        this.setState({
            addItem: event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                {this.state.items.map(item => {
                    return (
                        <ul>
                            <li>{item}</li>
                      </ul>
                  )
                })}
                <input
                    value={this.state.addItem}
                    onChange={this.handleInput}></input>
                <button onClick={this.handlItem}>Add Item</button>
            </div>
        )
    }
}