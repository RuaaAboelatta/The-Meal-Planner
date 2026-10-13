async function getCategories(){
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.categories
}

export default getCategories