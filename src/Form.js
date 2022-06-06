import { useForm } from "./useForm"

export function Form() {
    const {userValue, passwordValue, handleUser, handlePassword} = useForm()
   
    return (
        <div>
            <form>
                <input placeholder='username' type="name" value={userValue} onChange={handleUser}></input>
                <input placeholder='password' type="password" value={passwordValue}
                onChange={handlePassword}></input>
            </form>
        </div>
    )
}