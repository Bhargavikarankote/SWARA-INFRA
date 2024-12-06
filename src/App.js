import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Packages from './Pages/Packages';
import About from './Pages/About';
// import Premium from './components/Premium';
// import Premiumplus from './components/Premium+';
// import Luxury from './components/Luxury';
import Contact from './components/contact';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Premium from './components/Premium';




const App = () => {
  return (
        
    <Router basename="/SwaraInfra">
      <div>
        <TopBar/>
      <Navbar/>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/premium" element={<Premium/>}/>
          {/* <Route path="/components/Premium+" element={<Premiumplus/>}/>
          <Route path="/components/Luxury" element={<Luxury/>}/> */}
          
        </Routes>
    <Footer/>  </div>
    </Router>
    
    

  );
};

export default App;
