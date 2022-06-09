import {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom';
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
            {/* <div>
                <input></input>
                <button onClick={addUsername}>Insert a new Username</button>
            </div> */}
            
            {!isLoading
                ? <h1>Loading...</h1>
                :  <ul>
                    <Link to="/users/tony">Tony</Link>   
                    <Link to="/users/mario">Mario</Link>   
                    <Link to="/users/John">John</Link>   
                </ul>
            }

            <Outlet />
            
        </>

    )
}