import { useFetch } from "./useGitHubUser"
const username = 'mojombo'
const url = `https://api.github.com/users/${username}`


function GitHubUser() {
    const {user} = useFetch(url)

    return (
        <div>
            <h1>{user.login}</h1>
        </div>
    )
    
}

export default GitHubUser

