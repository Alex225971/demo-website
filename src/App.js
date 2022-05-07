import "./App.scss";
import { Welcome } from "./components/Welcome";
import { Navigation } from "./components/Navigation/Navigation";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Services />
      </div>
    </div>
  );
}

export default App;
