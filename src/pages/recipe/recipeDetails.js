import { useRecipe } from "../../hooks/useRecipe";
import RecipeCard from "../../components/recipeCard/recipeCard";
import IngredientsCard from "../../components/ingredientsCard/ingredientsCard";
import InstructionsCard from "../../components/instructionsCard/InstructionsCard";
import "./recipeDetails.css";
import RecipeCardSkeleton from "../../components/RecipeCardSkeleton/RecipeCardSkeleton";
function RecipeDetails(){
  const { recipe, loading, error } = useRecipe()

  if (loading) return (
    <div className="recipe-page">
      <div className="recipe-container">
        <RecipeCardSkeleton></RecipeCardSkeleton>
      </div>
      <div className="ingredients-container">
        <IngredientsCard></IngredientsCard>
      </div>
    </div>
  )
  if (error) return <div>Couldn't load recipe.</div>
  if (!recipe) return null

  return(
    <div className="recipe-page">
      <div className="recipe-container">
        <RecipeCard recipe={recipe}></RecipeCard>
      </div>
      <div className="ingredients-container">
        <IngredientsCard recipe={recipe}></IngredientsCard>
        <InstructionsCard recipe={recipe}></InstructionsCard>
      </div>
    </div>
  )
}
export default RecipeDetails