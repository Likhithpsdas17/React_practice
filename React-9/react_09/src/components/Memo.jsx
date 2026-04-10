import { memo, useState } from "react";

export function Memo(){
    const [umar, setUmar] = useState(10);

    function HandleAge(){
        setUmar(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Chikka age={umar}/>
            <button onClick={HandleAge}>Change Age</button>
            <Chikka age={20}/>
            <Chikka age={30}/>

        </div>  
    )
}
const Chikka = memo(function ({age}){
    return(
        <div>
            <h1>Hello From Chikka - {age} </h1>
        </div>
    )
})


// function Chikka({age}){
//     return(
//         <div>
//             <h1>Hello From Chikka - {age} </h1>
//         </div>
//     )
// }
    
