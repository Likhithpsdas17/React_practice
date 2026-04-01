import Counter from "./components/Counter";
import Person from "./components/Person";

function App(){
  return(
    <div>
      <h1>Welcome to React!</h1>
      <Person User="Liki" Age={10}/>
      <hr></hr>
      <Counter />
    </div>
  )
}

export default App;