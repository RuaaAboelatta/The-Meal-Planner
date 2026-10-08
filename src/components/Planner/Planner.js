import { Link } from "react-router-dom";
import { usePlanner } from "../../hooks/usePlanner";
import "./planner.css"
function Planner(){
    const { planner, removeFromPlanner, clearPlanner, days } = usePlanner();

    return(
        <div className="planner-card">
            <div className="planner-header">
                <div className="card-top">
                    <i class="fa-regular fa-calendar red-icon"></i>
                    <h1 className="title">Weekly Planner</h1>
                </div>
                <button onClick={clearPlanner} className="red-button">Clear Week</button>
            </div>

            <div className="planner-grid">
                {days.map((day) => {
                const meals = planner[day] || [];
                return (
                    <div className="day-column" key={day}>
                        <h2 className="title day-title">{day}</h2>
                        {meals.length === 0 ? (
                            <p className="day-empty">No meals planned</p>
                        ) : (
                            <ul className="day-meals">
                                {meals.map((meal) => (
                                    <li key={meal.idMeal} className="day-meal">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                        <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
                                        <button onClick={() => removeFromPlanner(day, meal.idMeal)}>
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
          );
        })}
      </div>
    </div>
    )
}
export default Planner