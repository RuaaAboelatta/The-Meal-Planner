import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategories";
import CategoryCardSkeleton from "../CategoryCardSkeleton/CategoryCardSkeleton";
import "./categoryCard.css";

function CategoryCard(){
    const {categories, loading, error} = useCategory()
    
    if (loading) return (
        <div className="grid">
            <CategoryCardSkeleton></CategoryCardSkeleton>
            <CategoryCardSkeleton></CategoryCardSkeleton>
            <CategoryCardSkeleton></CategoryCardSkeleton>
            <CategoryCardSkeleton></CategoryCardSkeleton>
        </div>
    )
    if (error)   return (
        <div className="grid">
            <div className="result-message">
                <img src="/assets/plate.png" alt="plate"></img>
                <h2 className="title">Couldn’t Load Categories</h2>
            </div>
        </div>
    )
    if (!categories)   return null
      
    return(
        <div className="grid">
            {categories.map((category) => (
                <div className="category-card" key={category.idCategory}>
                    <div className="card-img">
                        <img src={category.strCategoryThumb} alt={category.strCategory}/>
                    </div>
                    <div className="card-body">
                        <h2 className="title">{category.strCategory}</h2>
                        <Link to={`/categories/${category.strCategory}`} className="link-to-recipes">
                            Explore Collection
                            <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CategoryCard