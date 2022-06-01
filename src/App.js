import React from "react";
import { TodoList } from "./TodoList";



export class App extends React.Component{
    render() {
        return (
            <TodoList 
            render={items => {
                return (
                    <div>
                        {items.map((item, index )=> {
                            return <li key={index}>{item}
                            <button 
                                onClick={(event) => {event.target.parentElement.remove()}} className='remove'>remove
                            </button> </li>
                        })}
                    </div>
                )
            }}
            ></TodoList>
        )
    }
}

