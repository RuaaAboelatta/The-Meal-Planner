import { useFavorites } from "../../hooks/useFavorites";
import RecipeCard from "../../components/recipeCard/recipeCard";
function Favourites(){
    const { favorites} = useFavorites()
    return(
        <div className="grid">
            {favorites.map((recipe)=>{
                return(
                    <RecipeCard recipe={recipe}></RecipeCard>
                )
            })}
        </div>
    )
}
export default Favourites