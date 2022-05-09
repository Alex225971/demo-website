import "./App.scss";
import Header from "./components/Header";
import { Services } from "./components/Services/Services";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
    </div>
  );
}

export default App;
