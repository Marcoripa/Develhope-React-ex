import React, {useState} from "react";
import "./login.css"

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false)

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRemember = (event) => {
        setRemember(event.target.checked)
    }

    const handleLogin = () => {
        console.log({
            username: username,
            password: password,
            remember: remember
        })
    }

    const handleReset = () => {
        setUsername('')
        setPassword('')
        setRemember(false)
    }

    let bgColor 
    password.length >= 8 ? bgColor = 'enterButtonGreen' : bgColor = 'enterButtonRed'
        return(
            <div>
                <h1>Login</h1>
                <input name="username" value={username} onChange={handleUsername}></input>
                <input name="password" type="password" value={password} onChange={handlePassword}></input>
                <input name="checkbox" type="checkbox" checked={remember} onClick={handleRemember}></input>
                <button className={bgColor} disabled={!username || !password || password.length < 8 } onClick={handleLogin}>Login</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </div>
        )
}