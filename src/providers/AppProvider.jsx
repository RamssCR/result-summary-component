import { useState, useEffect } from 'react'
import { appContext } from '../context/appContext'

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
    const [items, setItems] = useState([])
    const [score, setScore] = useState(0)

    const [localError, setLocalError] = useState("")

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/data.json')
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(error)
                setLocalError(error.message)
            }
        }
        fetchItems()
    }, [])

    useEffect(() => {
        if (items.length > 0) setScore(Math.floor(items.reduce((acc, obj) => acc + obj.score, 0) / items.length))
    }, [items])

    return (
        <appContext.Provider value={{items, score, localError}}>
            {children}
        </appContext.Provider>
    )
}