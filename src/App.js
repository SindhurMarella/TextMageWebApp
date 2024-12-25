import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inbox from './components/Inbox';
import About from './components/About';
import './App.css';
import './Navbar.css';
import './Spells.css';
import './Inbox.css';
import './Outbox.css';
import './About.css';

function App() {
  return (
    <Router>
      <Navbar title="Text Mage" about="About Us" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inbox heading="Inbox" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
