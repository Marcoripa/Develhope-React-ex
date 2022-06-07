import { useEffect, useState } from "react";

export function useFetch(url) {
    const [user, setUser] = useState('')

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [url])

    return {user}
}