import React from "react";
import "./login.css"

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        check: ''
    }

    handleInput= (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleCheck = (event) => {
        this.setState({
            check: event.target.checked
        })
    }

    onLogin = () => {
        console.log(this.state)
    }

    render() {

        return(
            <div>
                <h1>Login</h1>
                <input name="username" value={this.state.username} onChange={this.handleInput}></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}></input>
                <input name="checkbox" type="checkbox" value={this.state.check} onChange={this.handleCheck}></input>
                <button id="button" onClick={this.onLogin} disabled={!this.state.username || !this.state.password}>Login</button>
            </div>
        )
    }
}