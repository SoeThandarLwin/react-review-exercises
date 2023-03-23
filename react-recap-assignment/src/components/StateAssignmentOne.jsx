import { useState} from "react";
function StateAssignmentOne(){
    const[count,setCount] = useState (0);
    const clickHandler =()=> {
        setCount(count+1);
    };
    return (
        <section>
            <button onClick={clickHandler}>
                {count}
            </button>
        </section>
    )
}

export default StateAssignmentOne