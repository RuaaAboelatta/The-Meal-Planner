import { useParams } from "react-router-dom"
import RecipeCard from "../../components/recipeCard/recipeCard"
import IngredientsCard from "../../components/ingredientsCard/ingredientsCard"
import "./recipe.css"
function Recipe(){
  const {recipeId} = useParams()

  return(
    <div className="recipe-page">
      <div className="large-card">
        <RecipeCard></RecipeCard>
      </div>
      <div className="ingredients-container">
        <IngredientsCard></IngredientsCard>
      </div>
    </div>
   
  )
}
export default Recipe