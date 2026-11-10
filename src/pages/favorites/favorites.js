import { useFavorites } from "../../hooks/useFavorites";
import RecipeCard from "../../components/recipeCard/recipeCard";
function Favourites(){
    const { favorites} = useFavorites()
    return(
        <div className="grid">
            {favorites.length === 0 ?
              (
                <div className="result-message">
                    <img src="/assets/plate.png" alt="plate"></img>
                    <h2 className="title">No Favorite Recipes </h2>
                </div>  
            ): favorites.map((recipe)=>{
                return(
                    <RecipeCard recipe={recipe}></RecipeCard>
                )})
            }
        </div>
    )
}
export default Favourites