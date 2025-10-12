import { useState } from "react";

function Counter(){
    let [cnt, setCnt] = useState(0);
    let incement = () => setCnt(cnt + 1);
    let decrement = () => setCnt(cnt - 1);
    return (
        <div>
            <h2>Счетчик:</h2>
            <h1>{cnt}</h1>
            <button onClick={decrement}>- Минус </button>
            <button onClick={incement}>+ Плюс </button>
        </div>
    )
}

export default Counter;