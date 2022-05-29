import React from 'react';
import "./login.css"

export class UncontrolledLogin extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.username.value)
        console.log(event.target.elements.password.value)
        console.log(event.target.elements.remember.checked)
   }

    render() {
        return (
            <div>
                <h1>Uncontrolled Login</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <input name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox" />
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        ) 
    }
}