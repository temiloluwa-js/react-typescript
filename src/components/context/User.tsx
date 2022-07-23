import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function User() {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext?.setUser({
            name: 'Vishwas',    
            email: 'vishwas@example.com'
        })
    }
    const handleLogout = () => {
        userContext?.setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is</div>
        <div>User email is</div>
    </div>
  )
}
