import { useState } from "react";
function Person({User,Age}){

const [username, setUsername] = useState(User);
const [agee, setAgee] = useState(Age);

function handleClick(){
    setUsername("Anonymous")
    setAgee(0)
}

    return(
        <div>
            <h1>User:{username}</h1>
            <h1>Age:{agee}</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default Person;