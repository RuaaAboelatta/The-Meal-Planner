import { useState, useEffect } from "react";
import getCategories from "../api/getCategories";
export function useCategory(){
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

    return{
        categories,
        loading,
        error
    }
} 