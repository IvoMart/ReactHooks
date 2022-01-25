import React, { useState, useEffect, useRef } from 'react'



export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({ error: null, data: null, loading: true })
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {
        
        setstate({ error: null, data: null, loading: true });

        fetch(url)
            .then(resp => resp.json())
            .then(
                data => {
                    setTimeout(() => {
                        if (isMounted.current) {
                            // Verificar si está montado:
                            setstate({
                                loading: false,
                                error: null,
                                data
                            })
                        }else{
                            // Caso contrario:
                            console.log("Unmounted");
                        }
                    }, 0);
                }
            )
    }, [url])

    return state;
}