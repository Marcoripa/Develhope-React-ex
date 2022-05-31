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

    handleReset = () => {
        this.setState({
            username: '',
            password: '',
            checkbox: false
        })
    }
    
    

    render() {
    let bgColor 
    this.state.password.length >= 8 ? bgColor = 'enterButtonGreen' : bgColor = 'enterButtonRed'
        return(
            <div>
                <h1>Login</h1>
                <input name="username" value={this.state.username} onChange={this.handleInput}></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}></input>
                <input name="checkbox" type="checkbox" value={this.state.check} onChange={this.handleCheck}></input>
                <button className={bgColor} onClick={this.onLogin} disabled={!this.state.username || !this.state.password}>Login</button>
                <button type="reset" onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}