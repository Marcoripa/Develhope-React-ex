import {useState, useEffect} from 'react'

import GitHubUser from "./GitHubUser";

export function GitHubUserList() {
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setList(data))
        setIsLoading(true)
    }, [])

    const addUsername = () => {
        let newUsername = document.querySelector('input').value
        setList([...list, {
            id: list.length + 1,
            login: newUsername
        }])
          console.log(list)
    }
    
    return (
        <>
            <div>
                <input></input>
                <button onClick={addUsername}>Insert a new Username</button>
            </div>
            
            {!isLoading
                ? <h1>Loading...</h1>
                : list.map((item, index) => {
                return (
                    <GitHubUser id={index} login={item.login} url={item.url}/>
                )
            })}
            
        </>

    )
}