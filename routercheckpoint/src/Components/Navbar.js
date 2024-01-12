import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="myLinks">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Contact'>contact</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Login'>Login</NavLink>
            <NavLink to='Profile'>Profile</NavLink>
            <NavLink to='/privateRoute'>PrivateRoute</NavLink>
            <NavLink to='/contact/bobo'>Bobo</NavLink>

        </nav>
     );
}
 
export default Navbar;