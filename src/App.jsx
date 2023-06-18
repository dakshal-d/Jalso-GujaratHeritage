import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import SignUp from "./components/Signup";
import Food from "./components/Food";
import Travel from "./components/Travel";
import KnowWeather from "./components/KnowWeather";
import TourismAttraction from "./components/City/TourismAttraction";
import Surat from "./components/City/Surat";
import GandhiNagar from "./components/City/GandhiNagar";
import Jamnagar from "./components/City/Jamnagar";
import Porbandar from "./components/City/Porbandar"; 
import Vadodra from "./components/City/Vadodra";
import Junagadh from "./components/City/Junagadh";
import Ahmedabad from "./components/City/Ahmedabad";
import Rajkot from "./components/City/Rajkot";

import  {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Hero />} />          
          <Route exact path="/food" element={ <Food />} />
          <Route exact path="/travel" element={ <Travel />} />
          <Route exact path="/LogIn" element={ <LogIn />} />
          <Route exact path="/SignUp" element={ <SignUp />} />
          <Route exact path="/travel/KnowWeather" element={ <KnowWeather/>} />
          <Route exact path="/travel/TourismAttraction" element={ <TourismAttraction/>} />
          <Route exact path="/travel/Surat" element={ <Surat/>} />
          <Route exact path="/travel/GandhiNagar" element={ <GandhiNagar/>} />
          <Route exact path="/travel/Jamnagar" element={ <Jamnagar/>} />
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/ContactUs" element={ <ContactUs />} />
          <Route exact path="/travel/Porbandar" element={ <Porbandar/>} />
          <Route exact path="/travel/Vadodra" element={ <Vadodra/>} />
          <Route exact path="/travel/Junagadh" element={ <Junagadh/>} />
          <Route exact path="/travel/Ahmedabad" element={ <Ahmedabad/>} />
          <Route exact path="/travel/Rajkot" element={ <Rajkot/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

