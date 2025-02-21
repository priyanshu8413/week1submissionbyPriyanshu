import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import "./styles/App.css";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import AuctionItem from './components/AuctionItem';
import PostAuction from './components/PostAuction';
import Landing from './components/Landing';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  //isAuthenticated is the state, setIsAuthenticated changes the state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  //loads when the component load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    // navigate('/signin');
  };

  return (
    <Router>
    <div className="app">
      
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      
        
        
        <main className="container mt-4">
          <Routes>
           <Route path="/home" element={<Landing/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/post-auction" element={<PostAuction />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
     </Router>
  );
}

export default App;