import "./App.scss";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <div className="bg-dark text-light">
        <Welcome name="Alex" />
      </div>
    </div>
  );
}

export default App;
