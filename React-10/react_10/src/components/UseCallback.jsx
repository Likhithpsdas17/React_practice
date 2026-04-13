import { memo, useCallback, useState } from "react";

function Usecallback(){

    // const [umar, setUmar] = useState(100);
    const [count, setCount] = useState(0);

    // Memorized the fn
    let a = useCallback( function(){
        console.log("Hello");
    }, [])

    return(
        <div>
            {/* <Chikka Age={umar} /> */}
            {/* <button onClick={()=>setUmar(Math.floor(Math.random()*10))}>Change Age</button> */}
            <Chikka Age={a} />
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>
    )
}

const Chikka = memo(function ({Age}){
    return(
        <div>Hello from - {Age()}</div>
    )
})
export default Usecallback;