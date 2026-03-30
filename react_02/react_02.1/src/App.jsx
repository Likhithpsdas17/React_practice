import Liki from "./components/Liki";

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <Liki hesru="leo" age={22} />
      <Liki hesru="messi" age={36} />
      <Liki hesru="ronaldo" age={38} />
    </div>
  )
}

export default App;