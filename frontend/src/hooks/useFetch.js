import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchBlogs = () => {
            fetch(url, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
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
        }

        if (user) fetchBlogs()
    }, [url, user])

    return { data, isPending }
}

export default useFetch
