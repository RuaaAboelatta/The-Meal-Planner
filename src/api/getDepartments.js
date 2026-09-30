async function getDepartments() {
    const response = await fetch(
        "/public/collection/v1/departments"
    );
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.departments
}

export default getDepartments