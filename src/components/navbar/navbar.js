import { NavLink } from "react-router-dom";
import { useDropdown } from "../../hooks/useDropdown";
import "./navbar.css";
function Navbar(){
    const navStyle = ({isActive})=> isActive ? 'nav-link active' : 'nav-link'
    const {isOpen, toggleDropdown, closeDropdown} = useDropdown()
    
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="/assets/logo.png" className="logo"></img>
                <h2>The Meal Planner</h2>
            </div>
            <div className={`nav-links ${isOpen ? "" : "closed"}`}>
                <NavLink to='/' className={navStyle} onClick={closeDropdown}>Discover</NavLink>
                <NavLink to='/categories' className={navStyle} onClick={closeDropdown}>Categories</NavLink>
                <NavLink to='/search' className={navStyle} onClick={closeDropdown}>Search</NavLink>
                <NavLink to='/mealplanner' className={navStyle} onClick={closeDropdown}>Meal Planner</NavLink>
                <NavLink to='/favorites' className={navStyle} onClick={closeDropdown}>Favorites</NavLink>
            </div>
            <i class={isOpen ? 'fa-solid fa-bars bars-open' : 'fa-solid fa-bars bars'} onClick={toggleDropdown}></i>
        </nav>
    )
}

export default Navbar