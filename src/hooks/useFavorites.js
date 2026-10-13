import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext()
export function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState(()=>{
        const favoriteItems = localStorage.getItem("favorites")
        return favoriteItems ? JSON.parse(favoriteItems) : []
    })

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = (recipe)=>{
        setFavorites((prev)=>{
            if (prev.some((rec) => rec.idMeal === recipe.idMeal)) {
                return prev.filter((rec) => rec.idMeal !== recipe.idMeal)
            }
            return [...prev, recipe]
        })
    }

    const isFavorite = (id)=>{
        return favorites.some((rec)=> rec.idMeal === id)
    }

    return(
        <FavoriteContext.Provider value ={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}
export function useFavorites() {
  return useContext(FavoriteContext)
}