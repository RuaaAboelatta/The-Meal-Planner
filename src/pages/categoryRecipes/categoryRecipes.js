import { useCategoryRecipes } from "../../hooks/useCategoryRecipes";
import "./categoryRecipes.css"
import RecipeCard from "../../components/recipeCard/recipeCard";

function CategoryRecipes(){
    const {recipes, loading, error} = useCategoryRecipes()
    if (loading) return <div className="recipe-detail">Loading...</div>;
    if (error) return <div className="recipe-detail">Couldn't load recipe.</div>;
    if (!recipes) return null;

    return(
        <div className="grid">
            {recipes.map((recipe)=>{
                return(
                    <RecipeCard recipe={recipe}></RecipeCard>
                )
            })}
        </div>
        
      
    )}
export default CategoryRecipes