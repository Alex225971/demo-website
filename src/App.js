import "./App.scss";
import { Welcome } from "./components/Welcome";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <div className="bg-dark text-light">
        <Navigation />
        <Welcome name="Alex" />
      </div>
    </div>
  );
}

export default App;
