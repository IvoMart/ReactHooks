import { useState } from 'react'


export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)

    /**
     * Funcion de Incrementar el contador
     */
    const increment = ()=>{ setCounter( counter + 1 ) };

    /**
     * Funcion de Decrementar el contador
     */
    const decrement = ()=>{ setCounter( counter - 1 ) };

    /**
     * Funcion de Resetear el contador
     */
    const reset = ()=>{ setCounter( initialState) };

    return{
        counter,
        increment,
        decrement,
        reset,
    };

}
