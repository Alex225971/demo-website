import "./App.scss";
import Header from "./components/Header/Header";
import { Services } from "./components/Services/Services";
import { Navigation } from "./components/Navigation/Navigation";
<<<<<<< HEAD
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
=======
import { Contact } from "./components/Contact";
>>>>>>> feature/contact

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
<<<<<<< HEAD
      <About />
      <Gallery />
      <Reviews />
      <Footer />
=======
      <Contact />
>>>>>>> feature/contact
    </div>
  );
}

export default App;
