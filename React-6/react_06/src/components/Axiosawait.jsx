// //Fetch using Async await

import { useEffect, useState } from "react"
import axios from "axios";
function Axiosawait(){
    const [todo, setTodos] = useState([]);

    useEffect(()=>{
    const API = "https://jsonplaceholder.typicode.com/todos"
    async function Calling(){
        let resp = await axios.get(API)
        console.log(resp.data);
        setTodos(resp.data)
    }
    Calling();
}, [] )

    return(
        <div>
            {
                todo.map((item)=>{
                    return( <div style={{border: "2px solid Green"}}>
                        <h1>ID: {item.id}</h1>
                        <h1>TITLE: {item.title}</h1>
                    </div> )
                })
            }
        </div>
    )
}
export default Axiosawait;