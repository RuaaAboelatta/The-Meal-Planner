import "./DepartmentCard.css"
import getDepartments from "../../api/getDepartments"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function DepartmentCard(){
    const [departments, setDepartments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let cancelled = false
        async function load() {
            try{
                const data = await getDepartments()
                if (!cancelled){
                    setDepartments(data)
                }
            }catch(err){
                if (!cancelled){
                    setError(err.message)
                }

            }finally{
                if (!cancelled){
                    setLoading(false)
                }
            }
            
        }
        load()
        return ()=>{
            cancelled = true
        }
    }, [])

    if (loading){
        return <p>Loading departments…</p>
    }
    if (error){
        return <p>Error: {error}</p>
    }
    if (!departments.length) return <p>No departments found.</p>

    return (
        <div className="cards-container">
            {departments.map((department) => (
                <div key={department.departmentId} className="dep-title">
                    <Link to={`/departments/${department.departmentId}`} className="dep-link">
                        {department.displayName}
                    </Link>
                </div>
                
            ))}
        </div>
    );
}
export default DepartmentCard