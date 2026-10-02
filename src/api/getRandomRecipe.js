async function getRandomRecipe() {
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.meals[0]
}

export default getRandomRecipe