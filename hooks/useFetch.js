import { View, Text } from 'react-native'
import { React, useState, useEffect } from 'react'
import axios from 'axios'


export const useFetch =  (endpoint, query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
           
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            // alert('There was an error fetching the data.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

   return { data, loading, error, refetch }

}

export default useFetch
