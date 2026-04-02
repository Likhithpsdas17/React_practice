// // //Fetch using Async await

// import { useEffect, useState } from "react"

// function Awaitcalling(){
//     const [todo, setTodos] = useState([]);

//     useEffect(()=>{
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     async function Calling(){
//         const result = await fetch(API);
//         const data = await result.json();
//         setTodos(data)
//     }
//     Calling();
// }, [] )

//     return(
//         <div>
//             {
//                 todo.map((item)=>{
//                     return( <div style={{border: "2px solid Green"}}>
//                         <h1>ID: {item.id}</h1>
//                         <h1>TITLE: {item.title}</h1>
//                     </div> )
//                 })
//             }
//         </div>
//     )
// }
// export default Awaitcalling;