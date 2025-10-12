import { useState } from "react";

function Item() {
    let [item, setItem] = useState([]);

    function addItem() {
        setItem([
            ...item,
            Math.floor(Math.random() * 10) + 1
        ]);
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            {item.map((i, index) => (
                <div 
                    key={index}
                    style={{
                        backgroundColor: index % 2 === 0 ? 'gray' : 'yellow',
                        padding: '5px',
                        margin: '2px'
                    }}
                >
                    {i}
                </div>
            ))}
        </div>
    );
}

export default Item;