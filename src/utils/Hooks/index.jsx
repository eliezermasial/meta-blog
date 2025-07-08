import { useEffect, useState } from "react";
import  awaitingLOading  from "../../lib/req";


export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchdata() {
            try {
                setLoading(true);
                await awaitingLOading(2000);

                const response = await fetch(url);
                const dataJson = await response.json();

                setData(dataJson);
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchdata();

    }, [url]);

    return{loading, error, data};
}