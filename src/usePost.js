import axios from 'axios'
import React, { useEffect } from 'react'

const usePost = (url, data) => {
    useEffect(() => {
        axios.post(url, data)
        .then(error => console.log(error))
    }, [data])
}

export default usePost