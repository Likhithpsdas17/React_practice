// // Axios using Promise

// import { useEffect, useState } from "react";
// import axios from "axios";

// function Axiospromise() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const API = "https://jsonplaceholder.typicode.com/todos";

//         axios.get(API)
//             .then((resp) => {
//                 console.log(resp.data);
//                 setTodos(resp.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             {
//                 todos.map((item) => {
//                     return (
//                         <div key={item.id} style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
//                             <h1>ID: {item.id}</h1>
//                             <h2>TITLE: {item.title}</h2>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// }

// export default Axiospromise;