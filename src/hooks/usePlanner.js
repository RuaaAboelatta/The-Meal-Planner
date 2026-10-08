import { useEffect, useState } from "react"

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
export function usePlanner(){
    const [planner, setPlanner] = useState(()=>{
        const plannerItems = localStorage.getItem('planner')
        return plannerItems ? JSON.parse(plannerItems) : {}
    })

    useEffect(()=>{
        localStorage.setItem('planner', JSON.stringify(planner))
    }, [planner])

    const addToPlanner = (day, meal)=>{
        setPlanner((prev)=>{
            return {
                ...prev,
                [day] : [...(prev[day] || []), meal],
            }
        })

    }

    const removeFromPlanner = (day, mealId)=>{
        setPlanner((prev)=>{
            return {
                ...prev,
                [day] : (prev[day] || []).filter((m) => m.idMeal !== mealId),
            }
        })

    }

    const clearDay = (day)=>{
        setPlanner((prev)=>{
            return{
                ...prev,
                [day] : []
            }
        })
    }

    const clearPlanner = ()=>{
        setPlanner({})
    }
    return { 
        planner, 
        addToPlanner, 
        removeFromPlanner, 
        clearDay, 
        clearPlanner, 
        days 
    }
}