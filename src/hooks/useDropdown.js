import { useState } from "react";

export function useDropdown(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen((prev) => !prev)
    const closeDropdown = ()=> {setIsOpen(false)}
    
    return {
        isOpen,
        toggleDropdown,
        closeDropdown
    }
}