import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getRecipeDetails from "../../api/getRecipeDetails";
import { useFavorites } from "../../hooks/useFavorites";
import "./recipeCard.css"
function RecipeCard(){
    const {toggleFavorite, isFavorite} = useFavorites()
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
    
        getRecipeDetails( recipeId)
          .then((recipe) => { if (!cancelled) setRecipe(recipe); })
          .catch((err) => { if (!cancelled) setError(err); })
          .finally(() => { if (!cancelled) setLoading(false); });
    
        return () => { cancelled = true; };
      }, [recipeId]);
    
      if (loading) return <div className="surprise-card surprise-card--skeleton" />;
      if (error)   return <div className="surprise-card">Couldn't load a recipe.</div>;
      if (!recipe)   return null;

      const active = isFavorite(recipe.idMeal)

      return(
        <div className="card">
            <button className="favorite-icon" onClick={()=> toggleFavorite(recipe)}>
                <i className={active ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
            </button>
            <div className="card-img">
                <img  src={recipe.strMealThumb}></img>
            </div>
            <div className="card-body">
                <div className="tags">
                    <span className="country-tag">{recipe.strCountry}</span>
                    <span className="type-tag">{recipe.strCategory}</span>
                </div>
                <h2 className="title">{recipe.strMeal}</h2>
            </div>
        </div>
      )
    

}
export default RecipeCard