import { useRandomRecipe } from '../../hooks/useRandomRecipe';
import RecipeCard from '../recipeCard/recipeCard';
import RecipeCardSkeleton from '../RecipeCardSkeleton/RecipeCardSkeleton';
import './RandomRecipeCard.css';

function RandomRecipeCard() {
  const {recipe, loading, error} = useRandomRecipe()

  if (loading) return <RecipeCardSkeleton></RecipeCardSkeleton>
  if (error)   return (
    <div className="result-message">
        <img src="/assets/plate.png"></img>
        <h2 className="title">Couldn’t Load A Recipe</h2>
      </div>
  )
  if (!recipe)   return null

  return (
    <RecipeCard recipe={recipe}></RecipeCard>
  )
}
export default RandomRecipeCard
