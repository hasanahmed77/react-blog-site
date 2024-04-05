import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsPending(false)
        })
        .catch(err => {
            console.log("ERROR:", err.message )
        })
    }, [url])

    return { data, isPending }
}

export default useFetch