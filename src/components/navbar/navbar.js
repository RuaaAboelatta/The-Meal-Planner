import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar(){
    const navStyle = ({isActive})=> isActive ? 'nav-link active' : 'nav-link'
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" className="logo"></img>
                <h2>The Meal Planner</h2>
            </div>
            <div className="nav-links">
                <NavLink to='/' className={navStyle}>Discover</NavLink>
                <NavLink to='/categories' className={navStyle}>Categories</NavLink>
                <NavLink to='/search' className={navStyle}>Search</NavLink>
                <NavLink to='/mealplanner' className={navStyle}>Meal Planner</NavLink>
            </div>
            <NavLink to='/favorites' className={navStyle}>
                {({ isActive }) => (
                    <i className={isActive ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                )}
            </NavLink>
        </nav>
    )
}

export default Navbar