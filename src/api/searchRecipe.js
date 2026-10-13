async function searchRecipe(searchWord){
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
    )
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.meals
}

export default searchRecipe