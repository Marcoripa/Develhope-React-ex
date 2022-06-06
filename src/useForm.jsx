import { useState } from "react"

export function useForm() {
    const {userValue, setUserValue} = useState('')
    const {passwordValue, setPasswordValue} = useState('')

    const handleUser = (e) => {
        setUserValue(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordValue(e.target.value)
    }

    return {userValue, passwordValue, handleUser, handlePassword}
}