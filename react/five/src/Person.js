import { useState } from "react";

function Person(){
    let [person, setPerson] = useState({
        "firstName": "Igor",
        "lastName": "Petrov"
    });

    function rename(){
        setPerson({... person, firstName:"Сергей"})
    }
    
    return(
        <div>
            <p>{person.firstName} {person.lastName}</p>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Person;