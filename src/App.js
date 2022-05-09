import "./App.scss";
import Header from "./components/Header/Header";
import { Services } from "./components/Services/Services";
import { Navigation } from "./components/Navigation/Navigation";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
