import { Link } from "react-router-dom";
import "./footer.css";
function Footer(){
    return(
        <div className="footer">
            <img src="/assets/logo.png"></img>
            <h2 className="title">Ready To Find Your Next Favorite Meal?</h2>
            <div className="btns">
                <Link to="/categories" className='red-button'>
                    <i class="fa-solid fa-utensils"></i>
                    Browse Recipes
                </Link>
                <Link to="/categories" className='green-button'>
                    <i class="fa-regular fa-calendar"></i>
                    Plan Your Week
                </Link>
            </div>
        </div>
    )

}
export default Footer