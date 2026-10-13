import { useRandomRecipe } from '../../hooks/useRandomRecipe';
import RecipeCard from '../recipeCard/recipeCard';
import RecipeCardSkeleton from '../RecipeCardSkeleton/RecipeCardSkeleton';
import './RandomRecipeCard.css';

function RandomRecipeCard() {
  const {recipe, loading, error} = useRandomRecipe()

  if (loading) return <RecipeCardSkeleton></RecipeCardSkeleton>
  if (error)   return <div>Couldn't load a recipe.</div>
  if (!recipe)   return null

  return (
    <RecipeCard recipe={recipe}></RecipeCard>
  );
}
export default RandomRecipeCard
