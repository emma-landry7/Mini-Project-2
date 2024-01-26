import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
    const {currentUser, handleUpdateUser} = useUserContext()

    const logout = () => {
        handleUpdateUser({email: null})
    }
    return (
        <nav className="flex margin" style={{justifyContent: "space-between"}}>
                <div><NavLink to="/home">Home</NavLink></div>
                <NavLink to="/"><button onClick={logout}>Log out</button></NavLink>
        </nav>
    )
}