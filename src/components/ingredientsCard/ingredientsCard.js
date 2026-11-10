import { useMemo } from "react";
import "./ingredientsCard.css";

function IngredientsCard({recipe}) {
  const ingredients = useMemo(() => {
    if (!recipe) return []

    const list = []
    for (let i = 1; i <= 20; i++) {
      const name = recipe[`strIngredient${i}`]
      const measure = recipe[`strMeasure${i}`]
      if (name?.trim()) {
        list.push({ name: name.trim(), measure: measure?.trim() ?? '' })
      }
    }
    return list
  }, [recipe])

  return (
    <div className="ingredients-card">
      <div className="card-header">
        <i className="fa-solid fa-kitchen-set title-icon"></i>
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
  )
}
export default IngredientsCard