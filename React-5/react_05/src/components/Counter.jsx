import {useState} from "react";
function Counter(){

    const [count, setCount] = useState(5);
    function HandleInc(){
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }
    function HandleDec(){
        setCount(count-1)
    }
    return(
        <div>
        <button onClick={HandleInc}>Increment</button>
        <h1>Count:{count}</h1>
        <button onClick={HandleDec}>Decrement</button>
        </div>
    )
}

export default Counter;