// //Fetch using Promise


// import { useEffect, useState } from "react"

// function Apicalling(){
//     const [todo, setTodos] = useState([]);

//     useEffect(()=>{
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     fetch(API) //return promise
//     .then((resp)=>{ return resp.json() }) //partial data
//     .then((data) => { //entire data
//         console.log(data, "data") 
//         setTodos(data)
//     }) 
//     .catch((err)=>{console.log(err, "catch")})
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
// export default Apicalling;