import ControlledInp from "./components/Controlled_inp";
import {Memo} from "./components/Memo";
import { UseMemo } from "./components/UseMemo";

function App(){
  return(
    <div>
      <Memo />
      <ControlledInp />
      <UseMemo />
    </div>
  )
}
export default App;