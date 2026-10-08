import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getCategoryRecipes from "../api/getCategoryRecipes";
export function useCategoryRecipes(){
    const {categoryName} = useParams()
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
    
        getCategoryRecipes( categoryName )
          .then((recipes) => { if (!cancelled) setRecipes(recipes); })
          .catch((err) => { if (!cancelled) setError(err); })
          .finally(() => { if (!cancelled) setLoading(false); });
    
        return () => { cancelled = true; };
    }, []);

    return{
        recipes,
        loading,
        error
    }
    
}