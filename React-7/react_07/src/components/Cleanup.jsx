// import { useEffect, useState } from "react";

// function Cleanup(){
//     const [time,setTime] = useState(0);

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setTime((time)=>time+1);
//         }, 1000)
//         return ()=> clearInterval(id);
//     }, [time])


//     return(
//         <div>
//             <h1>Timer: {time}</h1>
//         </div>
//     )
// }

// export default Cleanup;


// import { useEffect, useState } from "react";

// function Cleanup(){
//     const [time,setTime] = useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setTime(time+1);
//         }, 1000)
//     }, [time] )    


//     return(
//         <div>
//             <h1>Timer: {time}</h1>
//         </div>
//     )
// }

// export default Cleanup;