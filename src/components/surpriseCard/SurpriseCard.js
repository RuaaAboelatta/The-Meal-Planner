import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getRandomRecipe from '../../api/getRandomRecipe';
import './surpriseCard.css';

function SurpriseCard() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getRandomRecipe()
      .then((meal) => { if (!cancelled) setMeal(meal); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="surprise-card surprise-card--skeleton" />;
  if (error)   return <div className="surprise-card">Couldn't load a recipe.</div>;
  if (!meal)   return null;

  return (
    <div className="surprise-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
      />

      <div className="surprise-card-body">
        <div className="top-bar">
          <div className="tags">
            <span className="country-tag">{meal.strCountry}</span>
            <span className="type-tag">{meal.strCategory}</span>
          </div>
          <button className="favorite-icon">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>

        <div className="surprise-card-info">
          <h2>{meal.strMeal}</h2>
          <Link to={`/recipe/${meal.idMeal}`} className='recipe-link'>
            View Full Recipe
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SurpriseCard
