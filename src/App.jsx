import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Food from "./components/Food";
import Travel from "./components/Travel";
import KnowWeather from "./components/KnowWeather";
import TourismAttraction from "./components/City/TourismAttraction";
import Surat from "./components/City/Surat";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Hero />} />
          
          <Route exact path="/food" element={ <Food />} />
          <Route exact path="/travel" element={ <Travel />} />
          <Route exact path="/travel/KnowWeather" element={ <KnowWeather/>} />
          <Route exact path="/travel/TourismAttraction" element={ <TourismAttraction/>} />
          <Route exact path="/travel/Surat" element={ <Surat/>} />
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/ContactUs" element={ <ContactUs />} />
        </Routes>
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
