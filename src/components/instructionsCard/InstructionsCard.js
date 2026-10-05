import "./instructionsCard.css"
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import getRecipeDetails from "../../api/getRecipeDetails";

function InstructionsCard() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getRecipeDetails(recipeId)
      .then((r) => { if (!cancelled) setRecipe(r); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [recipeId]);

  if (loading) return <div className="surprise-card surprise-card--skeleton" />;
  if (error) return <div className="surprise-card">Couldn't load a recipe.</div>;
  if (!recipe) return null;

  const steps = recipe.strInstructions
  .split(/\r\n/)                            
  .map((s) => s.replace(/^[▢■•\-\s]+/, '').trim())   
  .filter(Boolean);        

  return (
    <ul className="instructions-card">
        {steps.map((step)=>(
            <li className="step">{step}</li>
        ))}
    </ul>
  );
}

export default InstructionsCard;