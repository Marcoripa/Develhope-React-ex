import {useState, useEffect} from 'react';

function GitHubUser({name}) {
    const [info, setInfo] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${ name }`)
            .then(response => response.json())
            .then(data => setInfo(data))
    }, [name])

    console.log(info)

    return (
        <div>
            <h1>My name is: {info.name}</h1> 
            <h2>I am currently in: {info.location}</h2>
            <p>{info.followers} people follow me</p>
            <p>I am following: {info.following}</p>
        </div>
    )
}

export default GitHubUser

