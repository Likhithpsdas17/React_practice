// //Class based components

import Counter from "./components/Counter";
function App(){
  return(
    <div>
     <Counter />
    </div>
  )
}
export default App;


// import React from "react";
// import Counter from "./components/Counter";


// export default class App extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//       user: [],
//     }
//   }
//   componentDidMount(){
//     console.log("component mounted");
//   }

//   componentWillUnmount(){
//     console.log("component unmounted");
//   }
//     render(){
//         return(
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//                 <Counter countt={this.state.count}/>
//             </div>
//         )
//     }
// }