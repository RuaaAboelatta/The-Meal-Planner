import { useState, useEffect } from "react";
import RecipeCard from "../../components/recipeCard/recipeCard";
import searchRecipe from "../../api/searchRecipe"
import "./Search.css"
import RecipeCardSkeleton from "../../components/RecipeCardSkeleton/RecipeCardSkeleton";
function Search(){
    const [searchWord, setSearchWord] = useState('')
    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
      if (!query) return
      let cancelled = false
      setLoading(true)
      setError(null)    
      searchRecipe( query )
        .then((recipes) => { if (!cancelled) setRecipes(recipes) })
        .catch((err) => { if (!cancelled) setError(err) })
        .finally(() => { if (!cancelled) setLoading(false) })    
        return () => { cancelled = true }
    }, [query])
    const handleSubmit = (e) => {
      e.preventDefault()
      setQuery(searchWord.trim())
    }

    return(
     <div className="search-page">
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search Recipes' value={searchWord} onChange={(e)=> setSearchWord(e.target.value)}></input>
          <button type="submit" className='search-button' >
            <i class="fa-solid fa-magnifying-glass"></i>
            Search
          </button>
        </form>
        {
          searchWord === "" ? (
            <div> serch for recipes</div>
          ) :
          loading ? (
            <div className="grid">
              <RecipeCardSkeleton></RecipeCardSkeleton>
              <RecipeCardSkeleton></RecipeCardSkeleton>
              <RecipeCardSkeleton></RecipeCardSkeleton>
              <RecipeCardSkeleton></RecipeCardSkeleton>
            </div>
          ) : error ? (
            <div className="recipe-detail">Couldn't load recipe.</div> 
          ) : recipes ? (
            <div className="grid">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))}
            </div>
          ): (<div className="recipe-detail">no recipes found</div> )
        }         
      </div>
    )
}
export default Search