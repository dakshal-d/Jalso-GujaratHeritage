import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import LogIn from "../components/LogIn";
import SignUp from "../components/Signup";
import Food from "../components/Food";
import Travel from "../components/Travel";
import KnowWeather from "../components/KnowWeather";

import Alert from "../components/Alert";
// import PrivateRoute from "./PrivateRoute";
import { useState } from 'react';
import  {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function AllRoutes() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) =>{
    setAlert({
      msg: message,
    })

    setTimeout(() =>{
      setAlert(null);
    }, 2000)
  }
  return (
    <div className="">
      <Router>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={ <Hero />} />          
          <Route exact path="/food" element={ <Food />} />
          <Route exact path="/travel" element={<Travel />} />
          <Route exact path="/LogIn" element={ <LogIn showAlert={showAlert} />} />
          <Route exact path="/SignUp" element={<SignUp showAlert={showAlert} />} />
          <Route exact path="/travel/KnowWeather" element={ <KnowWeather/>} />
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/ContactUs" element={ <ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

