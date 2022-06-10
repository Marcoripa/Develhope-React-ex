import useSWR from 'swr';

const fetcher = url=> fetch(url).then((res) => res.json())

function GitHubUser({name}) {
    // const {user} = useFetch(`https://api.github.com/users/${name}`)

    const {data, error} = useSWR(`https://api.github.com/users/${name}`, fetcher)

    return (
        <div>
            {!data && !error && <h3>Loading...</h3>}
            {error && <h3>An error occurred</h3>}
            {data && !error && 
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

