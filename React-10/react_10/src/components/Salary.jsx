import { useEffect, useRef } from "react";

function Salary(){

    let spanEl = useRef(82000);
    useEffect(()=>{
        setTimeout(()=>{
            spanEl.current.innerHTML = '78000'
        }, 3000)
    }, [])

    return(
        <div>Salary is : <span ref={spanEl}>{spanEl.current}</span></div>
    )
}
export default Salary;