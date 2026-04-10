import { useMemo, useState } from "react";

export function UseMemo(){

    const [value, setValue] = useState(0);
    const [input, setInput] = useState(0);

    function HandleRate(e){
        setInput(e.target.value)
    }

    const sum = useMemo(()=>{
        let ans = 0;
        for(let i=1; i<=input; i++){
            ans+=i;
            console.log("loop executed");
        }
        return ans;
    }, [input])

    // function HnadleChange(){
    //     setValue((value)=>value+1);
    // }

    return(
        <div>
        <input onChange={HandleRate} type="text" value={input} />
        <h1>SUM: {sum}</h1>
        <button onClick={()=>setValue(value+1)}>Click = {value}</button>
        </div>
    )
}