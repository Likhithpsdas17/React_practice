import Cat from "./components/Cat";
import { Dog } from "./components/Dog";

import User from "./components/Userprofile";

function App(){
  // const Userdata = {
  //   Name:'John',
  //   Age:'25',
  //   email:'john@example.com'
  // }
  return(
    <div>
    <h3>This App connects everything.</h3>
    <Cat Name="Brownie" Age={5} color="orange"/>
    <Cat Name="Billi" Age={3} color="White"/>
    <Cat Name="Bekku" Age={8} color="Grey"/>
    <Dog Training="Police Trained"/>

    <User Name="John" Age= {25} email="john@example.com"/>
    </div>
    
  )
}

export default App;