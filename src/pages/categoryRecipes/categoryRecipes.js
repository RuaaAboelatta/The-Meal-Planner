import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import getCategoryRecipes from "../../api/getCategoryRecipes";
import { useFavorites } from "../../hooks/useFavorites";
import "./categoryRecipes.css"

function CategoryRecipes(){
    const {toggleFavorite, isFavorite} = useFavorites()
    const {categoryName} = useParams()
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
    
        getCategoryRecipes( categoryName )
          .then((recipes) => { if (!cancelled) setRecipes(recipes); })
          .catch((err) => { if (!cancelled) setError(err); })
          .finally(() => { if (!cancelled) setLoading(false); });
    
        return () => { cancelled = true; };
      }, []);
    
      if (loading) return <div className="surprise-card surprise-card--skeleton" />;
      if (error)   return <div className="surprise-card">Couldn't load a recipe.</div>;
      if (!recipes)   return null;


      return(
        <div className="card-grid">
            {recipes.map((recipe)=>{
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
        
      
    )}
export default CategoryRecipes