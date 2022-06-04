function GitHubUser({id, login, url}) {
    return (
        <div className='username' key={id}>
            <h1>{id}</h1>
            <h2>{login}</h2>
            <p>{url}</p>
        </div>
    )
}

export default GitHubUser

