import Canvas from "./canvas"
import Designer from "./pages/Designer"
import Home from "./pages/Home"


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home /><Designer /><Canvas />
    </main>
  )
}

export default App
