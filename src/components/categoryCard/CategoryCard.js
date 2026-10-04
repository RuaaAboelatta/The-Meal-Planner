import { useState, useEffect } from "react";
import getCategories from "../../api/getCategories";
import "./categoryCard.css"
import { Link } from "react-router-dom";
function CategoryCard(){
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
    
        getCategories()
          .then((categories) => { if (!cancelled) setCategories(categories); })
          .catch((err) => { if (!cancelled) setError(err); })
          .finally(() => { if (!cancelled) setLoading(false); });
    
        return () => { cancelled = true; };
      }, []);
    
      if (loading) return <div className="surprise-card surprise-card--skeleton" />;
      if (error)   return <div className="surprise-card">Couldn't load categories.</div>;
      if (!categories)   return null;
      
        return(
            <>
                {categories.map((category) => (
                    <div className="category-card" key={category.idCategory}>
                        <div className="card-img">
                            <img
                                src={category.strCategoryThumb}
                                alt={category.strCategory}
                                loading="lazy"
                            />
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