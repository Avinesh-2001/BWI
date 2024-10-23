import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Mainpage from './Components/MainPage/Mainpage';
import About from './Components/About/About';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import Icubed from './Components/Module/Icubed'; 
import './App.css';
import Product from './Components/Product/Product';
import Slider from './Components/Module/Slider';
// import Quality from './Components/Module/Quality';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Glimpse from './Components/Module/Glimpse';


function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "antiquewhite" }}>
        <Navbar />
        <Slider />
        <div className="content">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/icubed" element={<Icubed />} /> {/* New Route */}
          </Routes>
        </div>
        {/* <Quality /> */}
        <Glimpse/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
