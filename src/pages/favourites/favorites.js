import { useFavorites } from "../../hooks/useFavorites"
import { Link } from "react-router-dom"
import "./favorites.css"
function Favourites(){
    const { favorites, toggleFavorite, isFavorite } = useFavorites()
    
    return(
        <div className="card-grid">
            {favorites.map((recipe)=>{
                const active = isFavorite(recipe.idMeal)
                return(
                    <div className="card small-card" key={recipe.idMeal}>
                        <button className="favorite-icon" onClick={()=>toggleFavorite(recipe)}>
                            <i className={active ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                        </button>
                        <div className="card-img">
                            <img  src={recipe.strMealThumb}></img>
                        </div>
                        <div className="card-body">
                            <div className="tags">
                                <span className="country-tag">{recipe.strCountry}</span>
                            </div>
                            <h2 className="title">{recipe.strMeal}</h2>
                            <Link to={`/recipe/${recipe.idMeal}`} className='recipe-link'>
                                View Full Recipe
                                <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>   
    )
}
export default Favourites