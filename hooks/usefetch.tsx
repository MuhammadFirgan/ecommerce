
'use client'

import { useEffect, useState } from "react"


const useFetch = ({ url } : { url: string }) => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const fetchingData = async () => {
        try {
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [url])

    return { data, loading }
}

export default useFetch