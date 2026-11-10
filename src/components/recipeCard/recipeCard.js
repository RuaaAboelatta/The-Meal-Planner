import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { usePlanner } from "../../hooks/usePlanner";
import { useDropdown } from "../../hooks/useDropdown";
import "./recipeCard.css"
import { useFeedback } from "../../hooks/useFeedback";

function RecipeCard({recipe}){
    const {toggleFavorite, isFavorite} = useFavorites()
    const active = isFavorite(recipe.idMeal)
    const {  addToPlanner, days } = usePlanner()
    const {isOpen, toggleDropdown, closeDropdown} = useDropdown()
    const { showMessage} = useFeedback()

    return(
        <div className="card">
            <div className="card-header">
                <span className="tag country-tag">{recipe.strCountry}</span>
                <div>
                    <button className="calendar-icon" onClick={toggleDropdown}>
                        <i class="fa-regular fa-calendar"></i>
                    </button>
                    <ul className={`drop-down ${isOpen ? "" : "closed"}`}>
                        {days.map((day)=>{
                            return(
                                <li className="drop-down-item" onClick={()=> {addToPlanner(day, recipe);
                                    closeDropdown()
                                    showMessage('Added To Planner Successfully!')
                                }}>{day}</li>
                            )
                        })}
                    </ul>
                    <button className="favorite-icon" onClick={()=> {toggleFavorite(recipe)}}>
                        <i className={active ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                    </button>
                </div>
            </div>
            <div className="card-img">
                <img  src={recipe.strMealThumb} alt="recipe"></img>
            </div>
            <div className="card-body">
                <Link to={`/recipe/${recipe.idMeal}`} className="title">
                    {recipe.strMeal}
                </Link>  
            </div>
        </div>
    )
}
export default RecipeCard