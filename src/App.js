import "./App.scss";
import Header from "./components/Header/Header";
import { Services } from "./components/Services/Services";
import { Navigation } from "./components/Navigation/Navigation";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
      <About />
    </div>
  );
}

export default App;
