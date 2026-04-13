import { useRef, useState } from "react";

function UseRef(){

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function handleInc(){
        countRef.current++;
    }
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Counter - {count} </button>
            <br></br>
            <button onClick={handleInc}>Increment - {countRef.current} </button>

        </div>
    )
}
export default UseRef;