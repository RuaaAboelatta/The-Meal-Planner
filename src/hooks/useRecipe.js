import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import getRecipeDetails from "../api/getRecipeDetails";

export function useRecipe(){
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)

        getRecipeDetails(recipeId)
        .then((r) => { if (!cancelled) setRecipe(r) })
        .catch((err) => { if (!cancelled) setError(err) })
        .finally(() => { if (!cancelled) setLoading(false) })

        return () => { cancelled = true }
    }, [recipeId])

    return {
        recipe,
        loading,
        error
    }
}