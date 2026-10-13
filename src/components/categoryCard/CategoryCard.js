import "./categoryCard.css";
import { useCategory } from "../../hooks/useCategories";
import { Link } from "react-router-dom";
import CategoryCardSkeleton from "../CategoryCardSkeleton/CategoryCardSkeleton";
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
    if (error)   return <div>Couldn't load categories.</div>
    if (!categories)   return null
      
    return(
        <div className="grid">
            {categories.map((category) => (
                <div className="category-card" key={category.idCategory}>
                    <div className="card-img">
                        <img src={category.strCategoryThumb} alt={category.strCategory} loading="lazy"/>
                    </div>
                    <div className="card-body">
                        <h2 className="title">{category.strCategory}</h2>
                        <Link to={`/categories/${category.strCategory}`} className="linkto">
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