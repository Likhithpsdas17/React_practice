import { useState } from "react";

function ControlledInp(){
    const [inp, setInp] = useState("");
    

    function HandleInput(e){
        setInp(e.target.value)
    }

  return(
    <div>
        {/* <input type="" />  Uncontrolled Input */}
        <input onChange={HandleInput} type="text" value={inp}/>  Controlled input
        <hr></hr>
    </div>
  )
}
export default ControlledInp;  