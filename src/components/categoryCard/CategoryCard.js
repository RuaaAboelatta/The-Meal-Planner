import "./categoryCard.css"
import { useCategory } from "../../hooks/useCategories";
import { Link } from "react-router-dom";
function CategoryCard(){
    const {categories, loading, error} = useCategory()
    
    if (loading) return <div className="surprise-card surprise-card--skeleton" />;
    if (error)   return <div className="surprise-card">Couldn't load categories.</div>;
    if (!categories)   return null;
      
    return(
        <>
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
        </>
    )
}
export default CategoryCard