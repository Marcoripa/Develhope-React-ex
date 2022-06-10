import { useFetch } from "./useGitHubUser"

function GitHubUser({name}) {
    const {data, error, isLoading, onRefresh} = useFetch(`https://api.github.com/users/${name}`)

   

    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error occurred</h3>}
            {data && 
                    <section>
                       <h1>My name is: {data.login}</h1> 
                       <h2>I am currently in: {data.location}</h2>
                       <p>{data.followers} people follow me</p>
                       <p>I am following: {data.following}</p>
                    </section>    
            
            } 
            
        </div>
    )
}

export default GitHubUser

