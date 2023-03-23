import React, {useState} from "react";

function StateAssignmentTwo() {
    const[numbers, setNumbers] = useState([]);

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 10);
        setNumbers([...numbers, randomNumber]);
    };

    return(
        <section className="state2">
            <button onClick={handleClick}> Click me! </button>
            <ul>
                {numbers.map((number, index) => (
                <li key={index}>{number}</li>
                ))}
            </ul>
           
        </section>
    );
}

export default StateAssignmentTwo;