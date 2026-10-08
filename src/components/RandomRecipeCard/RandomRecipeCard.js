import { useRandomRecipe } from '../../hooks/useRandomRecipe';
import RecipeCard from '../recipeCard/recipeCard';
import './RandomRecipeCard.css';

function RandomRecipeCard() {
  const {recipe, loading, error} = useRandomRecipe()

  if (loading) return <div className="random-recipe-card random-recipe-card--skeleton" />;
  if (error)   return <div className="random-recipe-card">Couldn't load a recipe.</div>;
  if (!recipe)   return null;

  return (
    <RecipeCard recipe={recipe}></RecipeCard>
  );
}
export default RandomRecipeCard
