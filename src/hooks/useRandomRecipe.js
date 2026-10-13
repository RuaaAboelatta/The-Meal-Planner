import { useState, useEffect } from "react";
import getRandomRecipe from "../api/getRandomRecipe";
export function useRandomRecipe(){

    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)

        getRandomRecipe()
        .then((r) => { if (!cancelled) setRecipe(r) })
        .catch((err) => { if (!cancelled) setError(err) })
        .finally(() => { if (!cancelled) setLoading(false) })

        return () => { cancelled = true }
    }, [])
    return{
        recipe,
        loading,
        error
    }
}