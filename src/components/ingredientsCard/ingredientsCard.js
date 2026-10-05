import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import getRecipeDetails from "../../api/getRecipeDetails";
import "./ingredientsCard.css";

function IngredientsCard() {
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

  const ingredients = useMemo(() => {
    if (!recipe) return [];

    const list = [];
    for (let i = 1; i <= 20; i++) {
      const name = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (name?.trim()) {
        list.push({ name: name.trim(), measure: measure?.trim() ?? '' });
      }
    }
    return list;
  }, [recipe]);

  if (loading) return <div className="surprise-card surprise-card--skeleton" />;
  if (error) return <div className="surprise-card">Couldn't load a recipe.</div>;
  if (!recipe) return null;

  return (
    <div className="ingredients-card">
      <div className="card-top">
            <i className="fa-solid fa-kitchen-set red-tag"></i>
            <h2 className="title">Ingredients</h2>
      </div>
      <ul>
        {ingredients.map(({ name, measure }) => (
          <li key={name} className="ingredient">
            <span className="measure">{measure}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsCard;