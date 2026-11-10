async function getRandomRecipe(attempt = 0){
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    )
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    const meal = data.meals[0]
    if (meal.strCategory === "Pork" && attempt < 5){
        return getRandomRecipe(attempt + 1)
    }
    return meal
}
export default getRandomRecipe