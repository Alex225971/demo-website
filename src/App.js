import "./App.scss";
import Header from "./components/Header/Header";
import { Services } from "./components/Services/Services";
import { Navigation } from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
