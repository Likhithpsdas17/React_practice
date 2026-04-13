import Salary from "./components/Salary";
import Usecallback from "./components/UseCallback";
import UseRef from "./components/UseRef";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";


function App(){
  return(
    <>
    <Routes>
    <Route path='/' element={ <Home /> }/>
    <Route path='/Dashboard' element={ <Dashboard /> }/>
    <Route path='/Profile' element={    <Profile />  }/>
    </Routes>
    <div>
      <Usecallback />
      <Salary />
      <UseRef />
    </div>
    </>
    
  )
}
export default App;

