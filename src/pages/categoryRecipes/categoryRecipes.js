import { useParams } from "react-router-dom"

function CategoryRecipes(){
    const {categoryId} = useParams()
    return(
        <h2>these are recipes from category {categoryId}</h2>
    )
}
export default CategoryRecipes