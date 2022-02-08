import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0) // o retorno de useState é um Array de dois valores que estão sendo desestruturados para as variáveis counter e setCounter

    function increment() {
        setCounter(counter + 1) // o setCounter é uma função que modifica o valor da variável counter. Ela será renderizada em tela pois seu conteúdo está envolvido por um useState(0)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}