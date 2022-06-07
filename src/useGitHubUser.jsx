import { useEffect, useState } from "react";

export function useFetch(url) {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function getUser() {
        setLoading(true)
        setError(null)

        try {
            const res = await fetch(url)
            const json = await res.json()
            setUser(json)
        }

        catch (error) {
            setError(error)
            setUser(null)
        }
    }

    useEffect(() => {
        getUser()
    }, [url])

    return {user}
}