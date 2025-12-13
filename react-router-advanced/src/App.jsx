
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Contact from "./pages/Contact";
import  About from "./pages/About";
import  Home from "./pages/Home";
import  ProfileDetails from "./pages/ProfileDetails"; 
import  ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./Pages/BlogPost";  
import Profile from "./Pages/Profile";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
