import Welcome from "./Welcome";
import "./App.css";

function App() {
  // By Rishabh Paudel (24BCS10110)
  const userName = "Rishabh";
  return (
    <div>
      <Welcome name={userName} />
    </div>
  );
}

export default App
